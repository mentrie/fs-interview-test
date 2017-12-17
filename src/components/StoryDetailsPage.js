import React from 'react'


const StoryDetailsPage = ({story}) => {
  return (
    <div>
      <header>Story Details Page</header>
      <h4>{story.title}</h4>
      <div>
        <p>Score: {story.score}</p>
        <p>Comments: {story.descendants}</p>
        <p>Author: {story.by}</p>
        <p>Website: {story.url}</p>
      </div>
    </div>
  )
}

export default StoryDetailsPage;