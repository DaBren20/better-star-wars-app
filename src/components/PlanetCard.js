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
                    <p>{props.gravity}</p>
                    <strong>Climate</strong>
                    <p>{props.climate}</p>
                    <strong>Orbital period</strong>
                    <p>{props.orbital_period}</p>  
                    <strong>Diameter</strong>
                    <p>{props.diameter}</p>
                    <strong>Terrain</strong>
                    <p>{props.terrain}</p>
                </Card.Description>
            </Card.Content>
        </Card>
    </div>
  )
}

export default PlanetCard