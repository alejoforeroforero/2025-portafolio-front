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
    about_paragraphs:[        
        {
          text: "I'm a software developer and musician passionate about creating digital \
          experiences that merge technology, music, and storytelling. \
          My work lives at the intersection of sound, interactivity, and web technologies, \
          where I build dynamic applications, craft immersive digital narratives, \
          and develop tools that empower artists and creators.",
          id: 1
        },
        {
          "text": `Currently, I work full-time as a full-stack developer, continuously honing 
          my technical skills while staying deeply connected to my creative roots. 
          In 2024, I co-founded Bandwaggon.ai, a music-tech startup leveraging AI to simplify 
          band management, enabling artists to focus on their craft. As a musician, I've 
          collaborated since 2008 with the internationally acclaimed band Meridian Brothers, 
          exploring innovative fusions of traditional and experimental sounds.`,
          "id": 2,
        },
        {
          "text": "Whether I'm coding, composing, or collaborating, my goal is to stay creative and develop software solutions for the fields of music and the arts..",
          "id": 3,
        }
      
    ]
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

