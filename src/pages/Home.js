import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Banner title="Welcome" />
        <h1>Welcome to my star wars app</h1>
        <p>This website uses the Star Wars API (<a href="https://swapi.dev/">SWAPI</a>) to grab data from the API and display the data into cards. This is just a small example of my skill to retrieve data from an API that is not mine.</p>
        <p>Filler</p>
        <p>More Filler</p>
        <h1>Even more filler</h1>
    </div>
  )
}

export default Home