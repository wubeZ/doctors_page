import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Doctor } from "@/lib/types";

export const doctorApi = createApi({
  reducerPath: "doctorApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://hakimhub-api-dev-wtupbmwpnq-uc.a.run.app/api/v1/",
  }),
  endpoints: (builder) => ({
    getDoctors: builder.query({
      query: () => ({
        url: "search?institutions=false&articles=False",
        method: "POST",
        timeout: 3000
      }),
    }),
    getSingleDoctor: builder.query<Doctor, string>({
      query: (id) => `users/doctorProfile/${id}`,
    }),
  }),
});

export const { useGetDoctorsQuery, useGetSingleDoctorQuery } = doctorApi;
