import React, {useState, useEffect} from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Navbar from './components/Menu'
import HomeView from './components/HomeView'
import SignUp from './components/registration/SignUp'
import SignIn from './components/registration/SignIn'
import About from './components/About'
import Contact from './components/Contact'
import SendQuote from './components/quotes/sendQuote'
import receiveQuote from './components/quotes/receiveQuote'
import yourQuotes from './components/quotes/yourQuotes'
import newProduct from './components/products/newProduct'
import myProducts from "./components/products/myProducts"
import dashboard from './components/dashboard/index'
import products from './components/products'
import axios from 'axios'
const App = () => {

  const [user, setUser] = useState(false);

  // useEffect(()=> {
  //   console.log('something')
  //   axios.get('http://localhost:5000/api/users/me',
  //   {withCredentials: true})
  //   .then(response => console.log(response.data))
  // },[]) 



  return (
    <div >
      <BrowserRouter>
        <Navbar user={user} />
        <Route exact path='/' component={HomeView} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/signup' component={SignUp} />
        <Route exact path='/signin' render={(props) => <SignIn setUser={setUser} {...props} /> }  />
        <Route exact path='/sendquote' component={SendQuote} />
        <Route exact path='/receivequote' component={receiveQuote} />
        <Route exact path='/yourquotes' component={yourQuotes} />
        <Route exact path='/products/new' component={newProduct} />
        <Route exact path='/products/myproducts' components={myProducts} />
        <Route exact path='/dashboard' component={dashboard} />
        <Route exact path='/products' component={products} />
      </BrowserRouter>
    </div>
  )
}

export default App
