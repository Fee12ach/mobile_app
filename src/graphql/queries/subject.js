import gql from 'graphql-tag'

export default gql`
query ($_id: MongoID) {
    subject(filter: {_id: $_id}){
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
          description
          facebook{
            name
            link
          }
          instagram{
            name
            link
          }
          youtube{
            name
            link
          }
      }
    }
  }
`
