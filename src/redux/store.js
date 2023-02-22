import { createStore } from "react-redux";
import userReducer from "./reducers/userReducer";

const store = createStore(userReducer);

export default store;
