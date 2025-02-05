import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { getProfile } from "./profile-actions";

type Paragraph = {
    id:number,
    text:string
}

type Profile = {
  id: number;
  name: string;
  position: string;
  summary: string;
  about_paragraphs: Paragraph[];
};

type ProfilePayload = Profile[];

export type Status = {
  profile: Profile;
  status: string;
  loading: boolean;
  successMessage: string;
  error: string;
};

const initialProfile:Profile = {
    id:1, 
    name:'Alejandro Forero',
    position:'FullStack Developer',
    summary:'Passionate about interactive digital experiences, blending technology, music, and electronic arts.',
    about_paragraphs:[]
}

const initialState: Status = {
  profile: initialProfile,
  status: "",
  loading: true,
  successMessage: "",
  error: "",
};

export const profileSlice = createSlice({
  name: "ProfileSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProfile.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getProfile.fulfilled, (state, action: PayloadAction<ProfilePayload>) => {
        state.status = "succeeded";
        state.loading = false;
        state.successMessage = "All ok!";
        state.profile = action.payload[0];
      })
      .addCase(getProfile.rejected, (state) => {
        state.status = "failed";
        state.error = "No sabemos pero algo paso";
      })
     
  },
});

