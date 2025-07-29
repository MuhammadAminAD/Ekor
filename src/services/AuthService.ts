import { baseApi } from "./baseApi";

export const AuthApi = baseApi.injectEndpoints({
      endpoints: (builder) => ({
            login: builder.mutation({
                  query: (body) => ({
                        url: "/auth/login",
                        method: 'POST',
                        body
                  })
            }),
            registerRequestCode: builder.mutation({
                  query: (body) => ({
                        url: "/auth/registration/request-code",
                        method: 'POST',
                        body
                  })
            }),
            registerVerifyCode: builder.mutation({
                  query: (body) => ({
                        url: "/auth/registration/verify-code",
                        method: 'POST',
                        body
                  })
            }),
            registerCreateUser: builder.mutation({
                  query: (body) => ({
                        url: "/auth/registration/create-user",
                        method: 'POST',
                        body
                  })
            }),
            resetPasswordRequestCode: builder.mutation({
                  query: (body) => ({
                        url: "/auth/reset-password/request-code",
                        method: 'POST',
                        body
                  })
            }),
            resetPasswordVerifyCode: builder.mutation({
                  query: (body) => ({
                        url: "/auth/reset-password/verify-code",
                        method: 'POST',
                        body
                  })
            }),
            resetPasswordSetPassword: builder.mutation({
                  query: (body) => ({
                        url: "/auth/reset-password/chenge-password",
                        method: 'POST',
                        body
                  })
            }),
      }),
      overrideExisting: false
})

export const {
      useLoginMutation,
      useRegisterRequestCodeMutation,
      useRegisterCreateUserMutation,
      useRegisterVerifyCodeMutation,
      useResetPasswordRequestCodeMutation,
      useResetPasswordSetPasswordMutation,
      useResetPasswordVerifyCodeMutation
} = AuthApi