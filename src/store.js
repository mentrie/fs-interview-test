import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import {compose} from 'redux';
import reducer from './reducer';
import saga from './sagas';


export const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const devtools = window.devToolsExtension || (() => noop => noop);
  const middlewares = [
    sagaMiddleware
  ];

  const enhancers = [
    applyMiddleware(...middlewares),
    devtools(),
  ];

  return {
    ...createStore(reducer,
      compose(...enhancers)),
    runSaga: sagaMiddleware.run(saga)
  };
};