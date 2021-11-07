import { applyMiddleware, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger';
import rootReducer from './reducers'

export default function configureStore(preloadedState) {
  const middlewares = [logger, thunkMiddleware]
  const middlewareEnhancer = applyMiddleware(...middlewares)

  const store = createStore(rootReducer, preloadedState, middlewareEnhancer)

  return store
}