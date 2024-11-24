// reducers/index.ts
import { combineReducers } from "redux";
// Import your individual reducers here
import postReducer from "../slices/postSlice";

const rootReducer = combineReducers({
  // Add your reducers here
  posts: postReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
