import { useState } from 'react'
import './App.css'
import Navigation from './components/Navigation'
import Header from './components/Header'
import Project from './components/Project'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <Navigation />
      <Project />
      <Footer />
    </>
  )
}

export default App
