import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomeView from './components/HomeView'
import SignUp from './components/registration/SignUp'
import SignIn from './components/registration/SignIn'
import About from './components/About'
import Contact from './components/Contact'
import SendQuote from './components/quotes/sendQuote'
import './App.css'


const App = () => {
  return (
    <div >
      <BrowserRouter>
        <Navbar />
        <Route exact path='/' component={HomeView} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/signup' component={SignUp} />
        <Route exact path='/signin' component={SignIn} />
        <Route exact path='/sendquote' component={SendQuote} />
      </BrowserRouter>
    </div>
  )
}

export default App
