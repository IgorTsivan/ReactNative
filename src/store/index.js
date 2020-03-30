import { createStore, combineReducers, applyMiddleware } from "redux";
import { postReduser } from "./reducers/post";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  post: postReduser
});

export default createStore(rootReducer, applyMiddleware(thunk));
