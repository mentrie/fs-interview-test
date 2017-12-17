import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem } from 'react-mdl';
import Link from 'react-router-dom/Link';

const TopStoriesList = ({stories}) => {
  const renderListItems = () => {
    return stories.map(story => (
      <div key={story.id}>
        <Link to={`/${story.id}`}>
          <ListItem>{story.title}</ListItem>
        </Link>
      </div>))
  }

  return (
    <List>
      {renderListItems()}
    </List>
  )
}

export default TopStoriesList;


