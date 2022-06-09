import React from 'react'
import InfoCard from './InfoCard'
import People from './People'
import { Grid } from 'semantic-ui-react';

const PeopleList = ( { data } ) => {
  return (
    <div>
          <Grid columns={3}>
            <Grid.Column>
              {data.map((people, index) => {return ((<InfoCard key={index} name={people.name} gender={people.gender} height={people.height} mass={people.mass} />))})}
            </Grid.Column>
          </Grid>
    </div>
  )
}

export default PeopleList