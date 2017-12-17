import React from 'react'


const StoryDetailsPage = ({story}) => {
  return (
    <div>
      <header>Story Details Page</header>
      <h4>{story.title}</h4>
      <p>
        <span>Score: {story.score}</span>
        <span>Comments: {story.descendants}</span>
        <span>Author: {story.by}</span>
      </p>
    </div>
  )
}

export default StoryDetailsPage;