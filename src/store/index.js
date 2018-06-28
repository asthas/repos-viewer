import { createStore, applyMiddleware } from "redux";
import { createEpicMiddleware } from "redux-observable";
import { composeWithDevTools } from "redux-devtools-extension";

import { IS_PRODUCTION } from "../config/constants";
import rootReducer from "./rootReducer";
import rootEpic from "./rootEpic";

const epicMiddleware = createEpicMiddleware();
const middlewares = [epicMiddleware];
const enhanceMiddleware = IS_PRODUCTION
  ? applyMiddleware(...middlewares)
  : composeWithDevTools(applyMiddleware(...middlewares));

const store = createStore(rootReducer, enhanceMiddleware);

epicMiddleware.run(rootEpic);

export default store;
