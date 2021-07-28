import React from 'react';
import { Feed, Grid, Icon, Image } from 'semantic-ui-react'


function Profile() {
    
    return (

        <Grid celled>
            <Grid.Row>
                <h3> Add Feed Post here</h3>
            </Grid.Row>

            <Grid.Row>
                <Grid.Column width={3}>
                    <h5> Followers</h5>
                </Grid.Column>
                <Grid.Column width={11}>
                    <h5> Feed Activity</h5>

                </Grid.Column>
            </Grid.Row>


        </Grid>

    );
}



export default Profile;
