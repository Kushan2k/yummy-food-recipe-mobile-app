import { createSlice } from "@reduxjs/toolkit"

const initialState = []

const Reducer = createSlice({
  name: "item",
  initialState,
  reducers: {
    load(state, action) {
      // console.log(action.payload)
      return [...action.payload?.items]
    },
  },
})

export const { load } = Reducer.actions
export default Reducer.reducer
