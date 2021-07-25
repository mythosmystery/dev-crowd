import React from 'react';
import { Feed, Grid, Icon, Image } from 'semantic-ui-react'



function Profile() {
    return (

        <Grid celled>
            <Grid.Row>
                <Grid.Column width={5}>
                    <Image src='/images/wireframe/image.png' />
                </Grid.Column>
                <Grid.Column width={11}>
                    <Feed>
                        <Feed.Event>
                            <Feed.Label>
                                <img src='/images/avatar/small/elliot.jpg' />
                            </Feed.Label>
                            <Feed.Content>
                                <Feed.Summary>
                                    <Feed.User>Elliot Fu</Feed.User> added you as a friend
                                    <Feed.Date>1 Hour Ago</Feed.Date>
                                </Feed.Summary>
                                <Feed.Meta>
                                    <Feed.Like>
                                        <Icon name='like' />4 Likes
                                    </Feed.Like>
                                </Feed.Meta>
                            </Feed.Content>
                        </Feed.Event>

                        <Feed.Event>
                            <Feed.Label image='/images/avatar/small/joe.jpg' />
                            <Feed.Content>
                                <Feed.Summary>
                                    <a>Joe Henderson</a> posted on his page
                                    <Feed.Date>3 days ago</Feed.Date>
                                </Feed.Summary>
                                <Feed.Extra text>
                                    Ours is a life of constant reruns. We're always circling back to where
                                    we'd we started, then starting all over again. Even if we don't run
                                    extra laps that day, we surely will come back for more of the same
                                    another day soon.
                                </Feed.Extra>
                                <Feed.Meta>
                                    <Feed.Like>
                                        <Icon name='like' />5 Likes
                                    </Feed.Like>
                                </Feed.Meta>
                            </Feed.Content>
                        </Feed.Event>
                    </Feed>
                </Grid.Column>
            </Grid.Row>


        </Grid>

    );
}



export default Profile;
