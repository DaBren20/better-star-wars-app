import React from 'react'
import PlanetCard from './PlanetCard';
import Planets from './Planets';
import { Grid } from 'semantic-ui-react';

const PlanetsList = ( { data } ) => {
  return (
    <div>
        <Grid columns={4} centered>
            {data.map((planets, index) => {return ((<Grid.Column><PlanetCard key={index} name={planets.name} population={planets.population} gravity={planets.gravity} climate={planets.climate} orbital_period={planets.orbital_period} diameter={planets.diameter} terrain={planets.terrain} /></Grid.Column>))})}
        </Grid>
    </div>
  )
}

export default PlanetsList