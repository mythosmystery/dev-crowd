import React, { useContext } from 'react';
import { Feed, Icon, Label, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { Auth } from '../utils/auth';
import moment from 'moment';
import LikePostButton from './LikeButton';

function FeedCard({ post: { content, date, id, username, likes } }) {
   return (
      <Feed.Event>
         <Feed.Label>
            <img src="/images/avatar/small/elliot.jpg" />
         </Feed.Label>
         <Feed.Content>
            <Feed.Summary>
               <Feed.User>{username}</Feed.User> {action}
               <Feed.Date>{date}</Feed.Date>
            </Feed.Summary>
            <Feed.Meta as={Link} to={`/posts/${id}`}>
               <Feed.Extra>{content}</Feed.Extra>
            </Feed.Meta>
            <Feed.Meta>
               <Feed.Like>
                  <Icon name="like" />
                  {likes.length}
               </Feed.Like>
            </Feed.Meta>
         </Feed.Content>
      </Feed.Event>
   );
}

export default FeedCard;
