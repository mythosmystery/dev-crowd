import gql from "@apollo/client"


export const GET_ME = gql`
{
    me {
        _id
        username
        name
        followers {
            username
            name
        }
        following  {
            username
            name
        }
    }
}

`

export const FETCH_POSTS_QUERY = gql`
{
    getPosts {
        id
        content 
        date
        likes {
            username
        }
        comments{
            id
            username
            date
            content
        }
    }
}
`