import React from 'react'
import Navbar from '../components/Navbar'
import People from '../components/People'
import Banner from '../components/Banner'


const PeoplePage = () => {
  return (
    <div>
        <Navbar />
        <Banner title='Hello World!'/>
        <h1>List of Star Wars Characters</h1>
        <People />
    </div>
  )
}

export default PeoplePage