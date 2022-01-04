import gql from 'graphql-tag'

export default gql`
query {
    subjects {
      _id
      name
      code
      description
      updatedAt
      photo
      contentfor
      teacher{
          _id
          username
          firstname
          lastname
          isTeacher
          avatar
          email
          
      }
    }
  }
`
