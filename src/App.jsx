import { useState, useEffect } from 'react'
import './App.css'

import Home from './pages/Home'
import Footer from './sections/Footer'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'

import { Route, Routes, } from 'react-router-dom';

function App() {

  return (
    <>
      <div className='relative bg-offWhite max-w-[320px] mob-landscape:max-w-[568px]
       tablet:max-w-[744px] desktop:max-w-[1440px] h-auto '>
        
          <Routes>
            <Route path='/' element={ <Home />} />
            <Route path='/blog' element={ <Blog />} />
            <Route path='/blog/:id' element={ <BlogPost />} />
          </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App

