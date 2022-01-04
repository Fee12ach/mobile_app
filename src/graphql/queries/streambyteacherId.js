import gql from 'graphql-tag'

export default gql`
query($teacher: MongoID){
  streams(filter: {teacher: $teacher}){
    _id
  thumbnail
    date
    starttime
    endtime
    name
    teacher{
      _id
      firstname
      lastname
      avatar
    }
  }
}
`
