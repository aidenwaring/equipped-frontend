import React, {useState, useEffect} from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
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
import ReactS3 from 'react-s3'

import { aws } from "../keys"

const App = (props) => {


  const [user, setUser] = useState(false);

  useEffect(()=> {
    axios.get('http://localhost:5000/api/users/me',
    {withCredentials: true})
    .then(response => setUser(response.data))
  },[]) 

  const config = {
    bucketName: 'aw-equippedbucket',
    dirName: 'products', /* optional */
    region: 'ap-southeast-2',
    accessKeyId: aws.accessKeyId,
    secretAccessKey: aws.secretAccessKey,
}




  return (
    <div >
      <BrowserRouter>
        <Navbar user={user} setUser={setUser} />
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
