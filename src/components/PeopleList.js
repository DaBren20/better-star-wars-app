import React from 'react'
import InfoCard from './InfoCard'

const PeopleList = ( { data } ) => {
  return (
    <div>
        {data.map((people, index) => {return ((<InfoCard key={index} name={people.name} gender={people.gender} />))})}
    </div>
  )
}

export default PeopleList