import React from 'react'
import InfoCard from './InfoCard'
import People from './People'
import { Grid } from 'semantic-ui-react';

const PeopleList = ( { data } ) => {
  return (
    <div>
        {data.map((people, index) => {return ((<InfoCard key={index} name={people.name} gender={people.gender} height={people.height} mass={people.mass} birth_year={people.birth_year} eye_color={people.eye_color} />))})}
    </div>
  )
}

export default PeopleList