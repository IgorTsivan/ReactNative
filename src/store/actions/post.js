import { LOAD_POSTS } from "../types";

export const loadPosts = () => {
  return async function(dispatch) {
    const response = await fetch(
      "https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0"
    );
    const data = await response.json();
    dispatch({ type: LOAD_POSTS, payload: data });
  };
};