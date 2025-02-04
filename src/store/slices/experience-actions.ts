import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../axios";

export const getExperience = createAsyncThunk(
  "getExperience",
  async (_, { signal }) => { 
    try {
      const response = await axiosInstance.get("/experience", {
        signal, 
      });
      return response.data;
    } catch (error: unknown) {
      if (error instanceof Error && 
         (error.name === 'CanceledError' || error.name === 'AbortError')) {
        console.log("Request was aborted");
      } else {
        console.error("Error fetching user data:", error);
      }
      throw error;
    }
  }
);