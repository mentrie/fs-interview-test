import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem } from 'react-mdl';
import Link from 'react-router-dom/Link';

const TopStoriesList = ({stories, onClick}) => {
  const renderListItems = () => {
    return stories.map(story => (
      <Link to={`/${story.id}`} key={story.id}>
        <ListItem>{story.title}</ListItem>
      </Link>))
  }

  return (
    <List>
      {renderListItems()}
    </List>
  )
}

export default TopStoriesList;


