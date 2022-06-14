import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Planets from '../components/Planets'

const PlanetPage = () => {
  return (
    <div>
        <Navbar />
        <Banner title='Planets'/>
        <h1>List of planets:</h1>
        <Planets />  
    </div>
  )
}

export default PlanetPage