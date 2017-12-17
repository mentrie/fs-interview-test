import { takeLatest, call, put, all, fork } from "redux-saga/effects";
import { FETCH_TOP_STORIES_REQUEST, FETCH_STORY_DETAIL_REQUEST } from "./actionTypes";
import { fetchTopStoriesAPI, fetchStoryDetailsAPI } from "./remote/api";
import { fetchTopStoriesSuccess, fetchStoryDetailsRequest, fetchStoryDetailsSuccess } from './actions';

function* fetchTopStories() {
  try {
    const stories = yield call(fetchTopStoriesAPI);
    yield put(fetchTopStoriesSuccess(stories));
  } catch (error) {
    // Handle error here
    throw error;
  }
}

function* fetchStoryDetails({storyId}) {
  try {
    const story = yield call(fetchStoryDetailsAPI, storyId);
    console.log(story)
    yield put(fetchStoryDetailsSuccess(story));
  } catch (error) {
    // Handle error here
  }
}

export function* fetchTopStoriesWatcher() {
  yield takeLatest(FETCH_TOP_STORIES_REQUEST, fetchTopStories);
}

export function* fetchStoryDetailsWatcher() {
  yield takeLatest(FETCH_STORY_DETAIL_REQUEST, fetchStoryDetails)
}

export default function* rootSaga() {
  yield all([
    fork(fetchTopStoriesWatcher),
    fork(fetchStoryDetailsWatcher)
  ])
}