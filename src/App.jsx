import React from 'react'
import Navbar from './components/Navbar'
import HomeView from './components/HomeView'

import { BrowserRouter, Route, Link } from 'react-router-dom'
import SignUp from './components/SignUp'
import About from './components/About'

const App = () => {
  return (
    <div >
      <BrowserRouter>
        
        <Navbar />
        <Route exact path='/' component={HomeView} />
        <Route exact path='/about' component={About} />
        <Route exact path='/signup' component={SignUp} />
      </BrowserRouter>
    </div>
  )
}

export default App
