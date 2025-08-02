import type { RootState } from "@/app/store";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const baseApi = createApi({
      reducerPath: 'api',
      baseQuery: fetchBaseQuery({
            baseUrl: 'http://localhost:3000/api/v1',
            prepareHeaders: (headers, { getState }) => {
                  const token = (getState() as RootState)

                  if (token) {
                        headers.set('Authorization', `Bearer ${token}`);
                  }

                  return headers
            }
      }),
      endpoints: () => ({})
})