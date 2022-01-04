import gql from 'graphql-tag'

export default gql`
query{
  payments(sort:_ID_DESC){
    _id
    time
    date
    slip
    updatedAt
    accepted{
      _id
      firstname
    lastname
    }
    customer{
    firstname
    lastname
      username
      _id
      role
      email
      avatar
      member
      expire
    }
  }
}
`
