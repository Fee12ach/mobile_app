import gql from 'graphql-tag'

export default gql`
  mutation (
    $_id: MongoID!
    $code: String
    $name: String
    $description: String
    $photo: String
      ){
    updateSubject(
      record:{
        _id:$_id,
        code: $code,
        name: $name,
        description: $description,
        photo: $photo,
      })
      {
        recordId
      }
  }
`