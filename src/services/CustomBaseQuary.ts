// services/customBaseQuery.ts
import {
    fetchBaseQuery,
    BaseQueryFn,
    FetchArgs,
    FetchBaseQueryError,
} from "@reduxjs/toolkit/query";
import { RootState } from "@/app/store";
import { setToken, removeToken } from "@/features/TokenSlice";

const baseQuery = fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_API_URL}/api/v1`,
    prepareHeaders: (headers, { getState }) => {
        const state = getState() as RootState;
        const accessToken = state.TokenSlice.token.accessToken;

        if (accessToken) {
            headers.set("Authorization", `Bearer ${accessToken}`);
        }

        return headers;
    },

});

const customBaseQuery: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
    args,
    api,
    extraOptions
) => {
    let result = await baseQuery(args, api, extraOptions);

    if (result.error?.status === 401) {
        const refreshResult = await baseQuery(
            {
                url: "/auth/refresh",
                method: "GET",
            },
            api,
            extraOptions
        );

        if (refreshResult.data) {
            const { token } = refreshResult.data as any;

            api.dispatch(
                setToken({ token })
            );

            result = await baseQuery(args, api, extraOptions);
        } else {
            api.dispatch(removeToken());
        }
    }

    return result;
};

export default customBaseQuery;
