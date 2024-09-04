import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Blog from './pages/Blog'
import Blogs from './pages/Blogs'
import {Publish} from './pages/Publish'
import ErrorPage from './pages/Errorpage'
import { LandingPage } from './pages/LandingPage'
import { About } from './pages/About'

function App() {

  const isAuthenticated = localStorage.getItem("token");

  return (
    <>
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<LandingPage/>}/>

        {!isAuthenticated ? <Route path='/signup' element={<Signup/>}/> : <Route path='/signup' element={<ErrorPage errormessage="You're already signed in"/>}/>}

        {!isAuthenticated ? <Route path='/signin' element={<Signin/>}/> : <Route path='/signin' element={<ErrorPage errormessage="You're already signed in"  />}/>}

        {<Route path='/blogs' element={<Blogs/>}/>}
        {<Route path='/about' element={<About/>}/>}

        {<Route path='/blog/:id' element={<Blog/>}/>}

        {isAuthenticated ? <Route path='/publish' element={<Publish/>}/> : <Route path='/publish' element={<ErrorPage errormessage='access denied'/>}/>}

      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
