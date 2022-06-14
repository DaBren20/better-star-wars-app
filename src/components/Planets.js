import React from 'react'
import React, { useState, useEffect } from 'react';
import PlanetsList from './PlanetsList';

const Planets = () => {
  const [planets, setPlanets] = useState([]);
  
  useEffect(() => {
    fetch(`https://swapi.dev/api/planets/?format=json`)
    .then(res => res.json())
    .then(json => {
      console.log("Planets", json.results)
      setPlanets(json.results)
    })
    .catch(err => {
      console.log(`Error: ${err}`)
    })
  },[])
  return (
    <div>
      <PlanetsList data={planets} />
    </div>
  )
}

export default Planets