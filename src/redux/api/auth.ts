import { ApiResponse, LoginResponse } from "../../types/Auth";
import { baseApi } from "../baseApi";
import { AUTH_CHANGE_PASSWORD, AUTH_LOGIN, AUTH_LOGOUT, AUTH_SEND_OTP, AUTH_VERIFY_OTP } from "../routes/routes";
import { jwtVerify } from "jose";

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
    
    verify: builder.mutation({
      queryFn: async () => {
        try {
          const token = localStorage.getItem("token");

          if (!token) {
            return { error: { status: 401, data: "No token found" } };
          }

          const { payload } = await jwtVerify(
            token,
            new TextEncoder().encode(import.meta.env.VITE_ACCESS_TOKEN_KEY)
          );

          const currentTime = Math.floor(Date.now() / 1000);
          const isExpired = payload.exp ? payload.exp < currentTime : true;

          if (isExpired) {
            return { error: { status: 401, data: "Token expired" } };
          }

          return { data: payload };
        } catch (error) {
          return { error: { status: 400, data: `${error}` } };
        }
      },
    }),

    logout: builder.mutation({
      query: () => ({
        url: AUTH_LOGOUT,
        method: "POST",
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

export const { useLoginMutation, useVerifyMutation, useLogoutMutation, useSendOtpMutation, useVerifyOtpMutation, useChangePasswordMutation } = authApi;