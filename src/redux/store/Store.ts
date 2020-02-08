import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";

import rootReducer from "../reducers/rootReducer";


const composeEnhancers = process.env.NODE_ENV === "development"
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose : compose;

export default createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);
