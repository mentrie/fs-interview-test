import axios from 'axios';
const BASE_URL = 'https://hacker-news.firebaseio.com/v0';

function getStoriesDetails(ids) {
  return ids.map(id => {
    return axios.get(`${BASE_URL}/item/${id}.json`)
    .then(({data}) => data)})
}

export const fetchTopStoriesAPI = async () => {
  try {
    const ids = await axios.get(`${BASE_URL}/topstories.json`);
    const responses = await axios.all(getStoriesDetails(ids));
    return responses;
  } catch (e) {
    throw new Error(e)
  }
}