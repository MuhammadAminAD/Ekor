// services/baseApi.ts
import { createApi } from "@reduxjs/toolkit/query/react";
import customBaseQuery from "./CustomBaseQuary";


export const baseApi = createApi({
      reducerPath: "api",
      baseQuery: customBaseQuery,
      endpoints: () => ({}),
});
