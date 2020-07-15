import React from 'react'
import Navbar from './components/Navbar'
import HomeView from './components/HomeView'

import { BrowserRouter, Route } from 'react-router-dom'
import SignUp from './components/SignUp'

const App = () => {
  return (
    <div >
      <BrowserRouter>
        <Navbar />
        <Route exact path='/' component={HomeView} />
        <Route exact path='/signup' component={SignUp} />
      </BrowserRouter>
    </div>
  )
}

export default App
