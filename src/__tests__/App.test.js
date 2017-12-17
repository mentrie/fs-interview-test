import React from 'react';
import renderer from 'react-test-renderer';
import App from '../containers/App';

it('renders without crashing', () => {
  jest.mock('react-router-dom/Route', () => 'Route')
  jest.mock('react-router-dom/Link', () => 'Link')
  const history = {
    push: jest.fn()
  }
  
  const component = renderer.create(<App history={history}/>)
  expect(component.toJSON()).toMatchSnapshot()
});
