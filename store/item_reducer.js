import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  items: [],
  saved: [],
}

const Reducer = createSlice({
  name: "item",
  initialState,
  reducers: {
    load(state, action) {
      // console.log(action.payload)
      return {
        items: [...action.payload?.items],
        saved: [...action.payload?.saved],
      }
    },
  },
})

export const { load } = Reducer.actions
export default Reducer.reducer
