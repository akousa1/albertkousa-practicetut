import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import  Header  from "../common/Header"
import  Home  from "../components/home/Home"
import  Resume  from "../components/page/Resume"
import  Portfolio  from "../components/page/Portfolio"
import  Blog  from "../components/page/Blog"
import  Contact  from "../components/page/Contact"
import  SideContent  from "../components/side/SideContent"

export const Pages = () => {
  return (
    <>
      <div className='main-div'>
        <div className='side'>
          <SideContent />
        </div>
        <main>
          <Router>
            <Header />
            <Routes>
              <Route exact path='/' element={<Home/>} />
              <Route exact path='/resume' element={<Resume/>} />
              <Route exact path='/portfolio' element={<Portfolio/>} />
              <Route exact path='/blog' element={<Blog/>} />
              <Route exact path='/contact' element={<Contact/>} />
            </Routes>
          </Router>
        </main>
      </div>
    </>
  )
}