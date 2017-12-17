import React, { Component } from 'react';
import Route from 'react-router-dom/Route';
import TopStories from './TopStoriesContainer';
import StoryDetails from './StoryDetails';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path='/' component={TopStories} />
        <Route path='/:storyId' component={StoryDetails} />
      </div>
    );
  }
}

export default App;
