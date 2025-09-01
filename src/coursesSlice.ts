import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "./store"

interface CoursesState {
    purchasedCourses: string[]
}

const initialState: CoursesState = {
    purchasedCourses: []
}

const courseSlice = createSlice({
    name: "courses",
    initialState,
    reducers: {
        purchaseCourse: (state, action: PayloadAction<string>) => {
            state.purchasedCourses.push(action.payload)
        },
        testSlice: (state) => {
            state.purchasedCourses.push('test!' + Math.random())
        }
    }
})

export const { purchaseCourse, testSlice } = courseSlice.actions

export const purchasedCourses = (state: RootState) => state.courses.purchasedCourses

export default courseSlice.reducer