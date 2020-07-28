import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

import Enzyme, { shallow } from "enzyme"
import EnzymeAdapter from "enzyme-adapter-react-16"

// Configure React Enzyme adapter
Enzyme.configure({ adapter: new EnzymeAdapter() })

//Renders without crashing
it('renders without crashing', () => {
  const wrapper = shallow(<App />) // Shallow render to Enzyme's DOM instead of a web browser using ReactDOM.render
})

//Example tests
// it('contains a h1 with the text "The count is"', () => {
//   const wrapper = shallow(<App />)
//   expect(wrapper.find('h1').text()).toContain('The count is')
// })

// it('renders nav bar button', () => {
//   const wrapper = shallow(<App />)
//   expect(wrapper.find('button').text()).toBe('Increment')
// })

// it('starts counter at 0', () => {
//   const wrapper = shallow(<App />)
//   expect(wrapper.find('h1').text()).toContain('The count is 0')
// })

// it('clicking button increments counter', () => {
//   const wrapper = shallow(<App />)
//   wrapper.find('button').simulate('click')
//   expect(wrapper.find('h1').text()).toContain('The count is 1')
// })