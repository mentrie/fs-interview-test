import {
  FETCH_TOP_STORIES_SUCCESS,
  FETCH_TOP_STORIES_REQUEST,
  FETCH_STORY_DETAIL_REQUEST,
  FETCH_STORY_DETAIL_SUCCESS
} from './actionTypes';

const initialState = {
  stories: [],
  isLoading: false,
  story: null,
}

export default (state=initialState, action) => {
  switch(action.type) {
    case FETCH_TOP_STORIES_REQUEST:
    case FETCH_STORY_DETAIL_REQUEST:
      return {...state, isLoading: true }
    case FETCH_TOP_STORIES_SUCCESS:
      return { stories:action.stories, isLoading: false };
    case FETCH_STORY_DETAIL_SUCCESS:
      return { story: action.story, isLoading: false };
    default:
      return state;
  }
}