import React, { useState, useEffect } from 'react';
import PeopleList from './PeopleList';
import { Grid } from 'semantic-ui-react';

const People = (props) => {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        fetch(`https://swapi.dev/api/people/?format=json`)
        .then(res => res.json())
        .then(json => {
          console.log("People", json.results)
          setPeople(json.results)
        })
        .catch(err => {
          console.log(`Error: ${err}`)
        })
      },[])

  return (
    <div>
      <PeopleList data={people} />
    </div>
  )
}

export default People