import { takeLatest, call, put, all, fork } from "redux-saga/effects";
import { FETCH_TOP_STORIES_REQUEST } from "./actionTypes";
import { fetchTopStoriesAPI } from "./remote/api";
import { fetchTopStoriesSuccess } from './actions';

function* fetchTopStories() {
  try {
    const stories = yield call(fetchTopStoriesAPI);
    yield put(fetchTopStoriesSuccess, stories);
  } catch (error) {
    throw error;
  }
}

export function* fetchTopStoriesWatcher() {
  yield takeLatest(FETCH_TOP_STORIES_REQUEST, fetchTopStories);
}

export default function* rootSaga() {
  yield all([
    fork(fetchTopStoriesWatcher)
  ])
}