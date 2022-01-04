import gql from 'graphql-tag'

export default gql`
mutation ( $firstname: String $lastname: String $mobile: String $username: String! $avatar: String $email: String  ){
    createStudentUser(record: {
         username: $username,
          avatar: $avatar,
          firstname:$firstname
          lastname:$lastname
          mobile:$mobile
          email:$email,
          role:STUDENT,
        }) {
        recordId
    }
}
`
