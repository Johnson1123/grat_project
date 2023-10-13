import { apiSlice } from "../apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({
        url: `/register-page`,
        method: "POST",
        body: data,
      }),
    }),
    activation: builder.mutation({
      query: (data) => ({
        url: `/activation`,
        method: "POST",
        body: data,
      }),
    }),
    login: builder.mutation({
      query: (data) => ({
        url: `/login-page`,
        method: "POST",
        body: data,
      }),
    }),
    forgetPassword: builder.mutation({
      query: (data) => ({
        url: `/forget-password`,
        method: "POST",
        body: data,
      }),
    }),
    retrievePassword: builder.mutation({
      query: (data) => ({
        url: `/retrive-password`,
        method: "POST",
        body: data,
      }),
    }),
    updatePassword: builder.mutation({
      query: (data) => ({
        url: `/update-password`,
        method: "POST",
        body: data,
      }),
    }),

    selectionData: builder.mutation({
      query: (data) => ({
        url: `/cars/data`,
        method: "POST",
        body: data,
      }),
    }),
    carRegistration: builder.mutation({
      query: (data) => ({
        url: `/register/cars`,
        method: "POST",
        body: data,
      }),
    }),
    deleteCar: builder.mutation({
      query: (data) => ({
        url: `/delete/cars`,
        method: "POST",
        body: data,
      }),
    }),
    approveCar: builder.mutation({
      query: (data) => ({
        url: `/approve/cars`,
        method: "POST",
        body: data,
      }),
    }),
    rejectCar: builder.mutation({
      query: (data) => ({
        url: `/reject/cars`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useActivationMutation,
  useForgetPasswordMutation,
  useRetrievePasswordMutation,
  useSelectionDataMutation,
  useUpdatePasswordMutation,
  useCarRegistrationMutation,

  useDeleteCarMutation,
  useRejectCarMutation,
  useApproveCarMutation,
} = authApiSlice;
