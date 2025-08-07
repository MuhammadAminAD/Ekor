import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

type CoursesType = {
    open: boolean,
    coursesName?: string
}

const initialState: CoursesType = {
    open: false,
    coursesName: ""
}

const coursesTabsSlice = createSlice({
    name: "coursesTabs",
    initialState,
    reducers: {
        setOpenCoursesTabs: (state, action : PayloadAction<CoursesType>) => {
            state.open = action.payload.open,
            state.coursesName = action.payload.coursesName
        }
    }
})

export const { setOpenCoursesTabs } = coursesTabsSlice.actions
export default coursesTabsSlice.reducer