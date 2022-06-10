import React from 'react'
import InfoCard from './InfoCard'
import People from './People'
import { Grid } from 'semantic-ui-react';

const PeopleList = ( { data } ) => {
  return (
    <div>
      <Grid columns={4} centered>
          {data.map((people, index) => {return ((<Grid.Column><InfoCard key={index} name={people.name} gender={people.gender} height={people.height} mass={people.mass} birth_year={people.birth_year} eye_color={people.eye_color} skin_color={people.skin_color} /> </Grid.Column>))})}  
      </Grid>
    </div>
  )
}

export default PeopleList