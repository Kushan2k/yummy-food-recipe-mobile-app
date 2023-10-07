import { configureStore } from "@reduxjs/toolkit"

import ItemReducer from "./item_reducer"

export default store = configureStore({
  reducer: {
    item: ItemReducer,
  },
})
