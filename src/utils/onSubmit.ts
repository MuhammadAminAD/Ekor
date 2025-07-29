import type { AppDispatch } from "@/app/store";
import { setAuthData, setAuthErrors } from "@/features/AuthenticationSlice";
import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";

export type ApiResponse<T> = {
      ok: boolean;
      data?: T;
      errors?: Record<string, string>;
};

interface HandleFormSubmitOptions<T> {
      dispatch: AppDispatch;
      mutation: Promise<ApiResponse<T>>; // unwrap() natijasi
      onSuccess?: (data: T) => void;
      onError?: (errors: Record<string, string>) => void;
      clearErrors?: boolean;
}

export async function handleFormSubmit<T>({
      dispatch,
      mutation,
      onSuccess,
      onError,
      clearErrors = true,
}: HandleFormSubmitOptions<T>): Promise<void> {
      try {
            if (clearErrors) {
                  dispatch(setAuthErrors({}));
            }

            const res = await mutation;

            if (res.ok && res.data) {
                  dispatch(setAuthData(res.data));
                  onSuccess?.(res.data);
            } else if (res.errors) {
                  dispatch(setAuthErrors(res.errors));
                  setTimeout(() => { dispatch(setAuthErrors({})); }, 5000)
                  onError?.(res.errors);
            }
      } catch (error: unknown) {
            const err = error as FetchBaseQueryError & {
                  data?: { errors?: Record<string, string>; message?: string };
            };

            const fallbackError = err.data?.errors ?? { general: "Server xatoligi yuz berdi" };
            dispatch(setAuthErrors(fallbackError));
            setTimeout(() => { dispatch(setAuthErrors({})); }, 5000)
            onError?.(fallbackError);
      }
}
