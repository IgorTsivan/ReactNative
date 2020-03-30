import { LOAD_POSTS } from "../types";

const initialState = {
  allPosts: [],
  loader: true
};
export const postReduser = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_POSTS:
      return { ...state, allPosts: action.payload };
    default:
      return state;
  }
};
