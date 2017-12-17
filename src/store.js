import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducer';
import saga from './sagas';

export const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  return {
    ...createStore(reducer,
      applyMiddleware(sagaMiddleware)),
    runSaga: sagaMiddleware.run(saga)
  };
};
