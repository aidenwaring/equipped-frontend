import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

import Enzyme, { shallow } from "enzyme"
import EnzymeAdapter from "enzyme-adapter-react-16"

import About from "./components/About";

// Configure React Enzyme adapter
Enzyme.configure({ adapter: new EnzymeAdapter() })

//Renders without crashing
it('renders without crashing', () => {
  const wrapper = shallow(<App />) // Shallow render to Enzyme's DOM instead of a web browser using ReactDOM.render
})

it('renders nav bar', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.find('navbar'))
})

it('renders the h1 on the about page', () => {
  const wrapper = shallow(<About />)
  expect(wrapper.find('h1').text()).toContain('About Us')
})