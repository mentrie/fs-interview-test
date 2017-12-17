import {
  FETCH_TOP_STORIES_REQUEST,
  FETCH_TOP_STORIES_SUCCESS,
  FETCH_STORY_DETAIL_REQUEST,
  FETCH_STORY_DETAIL_SUCCESS,
} from './actionTypes';

export const fetchTopStoriesRequest = () => ({
  type: FETCH_TOP_STORIES_REQUEST
});

export const fetchTopStoriesSuccess = (stories) => ({
  type: FETCH_TOP_STORIES_SUCCESS,
  stories
});

export const fetchStoryDetailsRequest = (storyId) => ({
  type: FETCH_STORY_DETAIL_REQUEST,
  storyId
});


export const fetchStoryDetailsSuccess = (story) => ({
  type: FETCH_STORY_DETAIL_SUCCESS,
  story
})