import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Brand from './components/Brand/Brand'
import Services from './components/Services/Services'

const App = () => {
  return (
    <main className='overflow-x-hidden'>
      <Navbar/>
      <Hero/>
      <Brand/>
      <Services/>
    </main>
  )
}

export default App
