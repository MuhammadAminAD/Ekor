import { createAsyncThunk } from "@reduxjs/toolkit"


const initalState={
     course:[]

}


export const fetchCourses = createAsyncThunk(
     "", async () => {
          const response = await fetch()
     }
)