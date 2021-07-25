import { gql } from '@apollo/client'

export const CREATE_USER = gql`
mutation createUser($username:String!, $email:String!,$password:String!){
    createUser(createInput: {
        username:$username
        email:$email
        password:$password
        }
    ) {
        id
        username
        email
        token
    }
}
`;

export const LOGIN_USER = gql`
mutation login($username:String!, $password:String!){
    login(username:$username, password:$password){
        id
        email
        name
    }
}

`;

export const ADD_POST_MUTATION = gql`
mutation createPost($content:String!){
    createPost(content:$content){
        id
        content
        username
        date
        likes {
            id
            username
        }
        likeCount
        comments {
            id
            content
            username
            date

        }
    }
}

`;

export const ADD_COMMENT_MUTATION = gql`
mutation($postID:ID!, $content: String!){
    addComment(postId:$postId, conttent:$content){
        id
        comments{
            id
            content
            username
        }
        commentCount
    }
}
`;

export const REMOVE_POST_MUTATION = gql`
mutation removePost ($postId:ID!){
    removePost(postId:$postId)
}
`;


export const REMOVE_COMMENT_MUTATION = gql`
mutation removeComment($commentId:ID!){
    removeComment(commentId:$commentId){
        id
        comments {
            id
            username
            content
        }
        commentCount
    }
}

`;

export const LIKE_POST_MUTATION = gql`
mutation likePost($postId:ID!){
    likePost(postId:$postId){
        id
        likes {
            id
            username
        }
        likeCount
    }
} 
`;

export const LIKE_COMMENT_MUTATION = gql`
mutation likeCommnet($commentId:ID!){
    likeComment(commentId:$commentId){
        id
        like {
            id
            username
        }
        likeCount
    }
} 
`;