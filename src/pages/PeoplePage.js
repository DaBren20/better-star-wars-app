import React from 'react'
import Navbar from '../components/Navbar'
import People from '../components/People'
import Banner from '../components/Banner'


const PeoplePage = () => {
  return (
    <div>
        <Navbar />
        <Banner title='Hello World!'/>
        <People />
    </div>
  )
}

export default PeoplePage