import React from 'react'
import PlanetCard from './PlanetCard';
import { Grid } from 'semantic-ui-react';

const PlanetsList = ( { data } ) => {
  return (
    <div>
        <Grid columns={4} centered>
            {data.map((people, index) => {((<Grid.Column><PlanetCard /></Grid.Column>))})}
        </Grid>
    </div>
  )
}

export default PlanetsList