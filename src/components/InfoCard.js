import React from 'react'
import { Card, Grid } from 'semantic-ui-react';

const InfoCard = ( props ) => {
  return (
    <div>
        <Card>
            <Card.Content>
                <Card.Header>{props.name}</Card.Header>
                <Card.Description>
                    <strong>Gender</strong>
                    <p>{props.gender}</p>
                    <strong>Height</strong>
                    <p>{props.height}cm</p>
                    <strong>Mass</strong>
                    <p>{props.mass}kg</p>
                    <strong>Birth Year</strong>
                    <p>{props.birth_year}</p>  
                    <strong>Eye Colour</strong>
                    <p>{props.eye_color}</p>
                    <strong>Skin colour</strong>
                    <p>{props.skin_color}</p>
                </Card.Description>
            </Card.Content>
        </Card>
    </div>
  )
}

export default InfoCard