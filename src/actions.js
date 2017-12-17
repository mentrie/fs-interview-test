import {
  FETCH_TOP_STORIES_REQUEST,
  FETCH_TOP_STORIES_SUCCESS
} from './actionTypes';
export const fetchTopStoriesRequest = () => ({
  type: FETCH_TOP_STORIES_REQUEST
});

export const fetchTopStoriesSuccess = (stories) => ({
  type: FETCH_TOP_STORIES_SUCCESS,
  stories
})