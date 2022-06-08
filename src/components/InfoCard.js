import React from 'react'
import { Card, Grid } from 'semantic-ui-react';

const InfoCard = ( { data } ) => {
  return (
    <div>
        <Grid columns={3}>
            {data.map((people, i) => {
                return (
                    <Grid.Column key={i}>
                        <Card>
                            <Card.Content>
                                <Card.Header>{people.name}</Card.Header>
                                <Card.Description>
                                    <strong>Gender</strong>
                                    <p>{people.gender}</p>
                                    <strong>Height</strong>
                                    <p>{people.height}</p>
                                    <strong>Mass</strong>
                                    
                                </Card.Description>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                )
            })}
        </Grid>
    </div>
  )
}

export default InfoCard