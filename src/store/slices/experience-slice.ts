import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { getExperience } from "./experience-actions";
import { type ExperienceType } from "@/types/Types";

type ExperiencePayload = ExperienceType[];

export type Status = {
  info: ExperienceType[];
  status: string;
  loading: boolean;
  successMessage: string;
  error: string;
};

const initialExperience: ExperienceType[] = [];

const initialState: Status = {
  info: initialExperience,
  status: "",
  loading: true,
  successMessage: "",
  error: "",
};

export const experienceSlice = createSlice({
  name: "ExperienceSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getExperience.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        getExperience.fulfilled,
        (state, action: PayloadAction<ExperiencePayload>) => {
          state.status = "succeeded";
          state.loading = false;
          state.successMessage = "All ok!";
          state.info = action.payload;
        }
      )
      .addCase(getExperience.rejected, (state) => {
        state.status = "failed";
        state.error = "No sabemos pero algo paso";
      });
  },
});
