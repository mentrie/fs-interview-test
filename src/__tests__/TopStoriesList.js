import React from 'react';
import renderer from 'react-test-renderer';
import TopStoriesList from '../components/TopStoriesList';

it('Should render component with empty props',  () => {
  // jest.mock('react-router-dom/Router', () => 'Router');  
  // jest.mock('react-router-dom/Link', () => 'Link');

  const component = renderer.create(<TopStoriesList stories={[]} />);

  expect(component.toJSON()).toMatchSnapshot();
})

it('Should render component with props provided', () => {
  // jest.mock('react-router-dom/Router', () => 'Router');
  // jest.mock('react-router-dom/Link', () => 'Link');
  
  
  const component = renderer.create(<TopStoriesList stories={[{title: 'Testing', id: 1}, {title: 'testing 2', id: 2}]} />);
  expect(component.toJSON()).toMatchSnapshot();
});

