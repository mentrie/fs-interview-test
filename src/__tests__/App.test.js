import React from 'react';
import renderer from 'react-test-renderer';
import App from '../containers/App';

it('renders without crashing', () => {
  const component = renderer.create(<App />)
  expect(component.toJSON()).toMatchSnapshot()
});
