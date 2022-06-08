import React from 'react'
import PeoplePage from '../pages/PeoplePage';
import { Card, Grid } from 'semantic-ui-react';

const People = ( { data } ) => {
  return (
    <div>
        <h1>People</h1>
        <Grid columns={3}>
            {data.map((people, i) => {
                return (
                    <Grid.Column key={i}>
                        <Card>
                            <Card.Content>
                                <Card.Header>{people.name}</Card.Header>
                                <Card.Description>
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

export default People