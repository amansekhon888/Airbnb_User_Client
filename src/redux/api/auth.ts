import { ApiResponse, LoginResponse } from "../../types/Auth";
import { baseApi } from "../baseApi";
import { AUTH_CHANGE_PASSWORD, AUTH_LOGIN, AUTH_LOGOUT, AUTH_SEND_OTP, AUTH_VERIFY_OTP } from "../routes/routes";

const role = "host";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: AUTH_LOGIN,
        method: "POST",
        body: {...credentials, role},
      }),
      transformResponse: (response: ApiResponse<LoginResponse>) => response.data,
    }),

    logout: builder.mutation({
      query: () => ({
        url: AUTH_LOGOUT,
        method: "POST",
        // credentials: "include"
      }),
    }),

    sendOtp: builder.mutation({
      query: (data) => ({
        url: AUTH_SEND_OTP,
        method: "POST",
        body: { 
          ...(data.inputMode === "email" ? { email: data.loginKey } : { phone: data.loginKey }),
          type: "FORGET_PASSWORD_OTP",
          criteria: data.inputMode === "email" ? "EMAIL" : "PHONE",
          role
        },
      }),
    }),

    verifyOtp: builder.mutation({
      query: (otp) => ({
        url: AUTH_VERIFY_OTP,
        method: "POST",
        body: { 
          otp: otp,
        },
      }),
    }),

    changePassword: builder.mutation({
      query: (password) => ({
        url: AUTH_CHANGE_PASSWORD,
        method: "PATCH",
        body: { 
          password: password,
        },
      }),
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation, useSendOtpMutation, useVerifyOtpMutation, useChangePasswordMutation } = authApi;