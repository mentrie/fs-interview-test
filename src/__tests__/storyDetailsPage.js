import React from 'react';
import renderer from 'react-test-renderer';
import StoryDetailsPage from '../components/StoryDetailsPage';

it('Should render component with empty props',  () => {
  const component = renderer.create(<StoryDetailsPage story={{}} />);

  expect(component.toJSON()).toMatchSnapshot();
})

it('Should render component with props provided', () => {
  const component = renderer.create(<StoryDetailsPage story={{title: 'Testing', id: 1}} />);
  expect(component.toJSON()).toMatchSnapshot();
});

