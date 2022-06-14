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
                    <strong>Gravity</strong>
                    <p>{props.gravity}cm</p>
                    <strong>Climate</strong>
                    <p>{props.climate}kg</p>
                    <strong>Orbital period</strong>
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