import { FilterCategoriesResponse } from "@/types/filter.types";
import { baseApi } from "./baseApi";

export const FilterCategoriesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getFilterCategories: builder.query<FilterCategoriesResponse, void>({
      query: () => ({
        url: "/filter/menus",
        method: "GET",
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetFilterCategoriesQuery } = FilterCategoriesApi;
