import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Banner title="Welcome" />
        <h1>Welcome to my star wars app</h1>
        <p>This website uses the Star Wars API (<a href="https://swapi.dev/">SWAPI</a>)</p>
    </div>
  )
}

export default Home