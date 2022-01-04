import gql from 'graphql-tag'

export default gql`
  mutation (
    $_id: MongoID!
    $firstname: String
    $lastname: String
    $avatar: String
    $mobile: String
    $email: String
      ){
    updateUser(
      record:{
        _id:$_id,
        email: $email,
        mobile: $mobile,
        avatar: $avatar,
        lastname: $lastname,
        firstname: $firstname,
      })
      {
        recordId
      }
  }
`