import gql from "graphql-tag"

export default gql`
mutation ($teacher: MongoID $name: String $description: String $photo: String $code: String!  ){
    createSubject(record: {
        teacher: $teacher,
         name: $name,
          photo: $photo,
          description:$description,
          code: $code,
        }) {
        recordId
    }
}
`
