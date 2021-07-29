import React from 'react';
import { Feed, Grid, Icon, Image } from 'semantic-ui-react'
import FeedPost from '../components/FeedPost';

function Profile() {


    return (

        <Grid celled>
            <Grid.Row>
                <FeedPost />

            </Grid.Row>

            <Grid.Row>
                <Grid.Column width={5}>
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
