import React from 'react'
import { Card, Grid } from 'semantic-ui-react';


const PlanetCard = ( props ) => {
  return (
    <div>
        <Card>
            <Card.Content>
                <Card.Header>{props.name}</Card.Header>
                <Card.Description>
                    <strong>Population</strong>
                    <p>{props.population}</p>
                    <strong>Height</strong>
                    <p>{props.gravity}cm</p>
                    <strong>Mass</strong>
                    <p>{props.climate}kg</p>
                    <strong>Birth Year</strong>
                    <p>{props.orbital_period}</p>  
                    <strong>Eye Colour</strong>
                    <p>{props.diameter}</p>
                    <strong>Skin colour</strong>
                    <p>{props.terrain}</p>
                </Card.Description>
            </Card.Content>
        </Card>
    </div>
  )
}

export default PlanetCard