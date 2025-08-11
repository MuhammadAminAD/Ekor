import { baseApi } from "./baseApi";
import { FilterResponse } from "@/types/filter.types";

export const FilterApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getFilters: builder.query<FilterResponse, void>({
      query: () => ({
        url: "/filter/filter-menus", 
        method: "GET",
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetFiltersQuery } = FilterApi;
