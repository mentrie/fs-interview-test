import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { Spinner } from 'react-mdl';
import { fetchTopStoriesRequest } from '../actions';
import TopStoriesList from '../components/TopStoriesList';


export class TopStoriesContainer extends Component {
  componentDidMount() {
    const {
      stories,
      fetchTopStoriesRequest
    } = this.props
    if(!stories.length) {
      fetchTopStoriesRequest()
    }
  }

  render() {
    const { stories, isLoading } =  this.props;
    if(isLoading) {
       return (
          <div>
            <p className="spinner-text">Sit back and relax as the top stories load.... :)</p>
            <Spinner singleColor className="spinner"/>
          </div>
       )
    }
    
    return(
      <TopStoriesList stories={stories} />
    )
  }
}

const mapStateToProps = ({ isLoading, stories }) => ({
  isLoading,
  stories
});

const mapDispatchToProps = {
  fetchTopStoriesRequest,
}

export default connect(mapStateToProps, mapDispatchToProps)(TopStoriesContainer);

