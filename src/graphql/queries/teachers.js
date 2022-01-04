import gql from 'graphql-tag'

export default gql`
query{
  teacherUsers{
    _id
    firstname
    lastname
    avatar
    email
    description
  }
}
`
