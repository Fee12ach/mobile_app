import gql from 'graphql-tag'

export default gql`
query{
  streams(sort:_ID_DESC){
    _id
  thumbnail
    date
    starttime
    endtime
    name
    contentfor
    teacher{
      _id
      firstname
      lastname
      avatar
    }
  }
}
`
