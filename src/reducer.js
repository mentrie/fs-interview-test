import {
  FETCH_TOP_STORIES_SUCCESS
} from './actionTypes';

const initialState = {
  stories: [],
  isLoading: false,
  story: null,
}

export default (state=initialState, action) => {
  switch(action.type) {
    case FETCH_TOP_STORIES_SUCCESS:
      return action.stories;
    default:
      return state;
  }
}