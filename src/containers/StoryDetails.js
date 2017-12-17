import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchStoryDetailsRequest } from '../actions';
import {Spinner} from 'react-mdl';
import StoryDetailsPage from '../components/StoryDetailsPage';

export class StoryDetails extends Component {
  componentDidMount() {
    const { fetchStoryDetailsRequest, storyId } = this.props;
    console.log(storyId, 'what id')
    fetchStoryDetailsRequest(storyId);  
  }
  render() {
    const { story, isLoading } = this.props;
    console.log(story)
    if(isLoading || !story) return <Spinner singleColor />
    return(
      <StoryDetailsPage story={story} />
    )
  }
}


const mapStateToProps = (state, ownProps) => ({
  isLoading: state.isLoading,
  storyId: ownProps.match.params.storyId, 
  story: state.story
});

const mapDispatchToProps = {
  fetchStoryDetailsRequest,
}

export default connect(mapStateToProps, mapDispatchToProps)(StoryDetails);