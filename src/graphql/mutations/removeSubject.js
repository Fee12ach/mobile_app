import gql from 'graphql-tag'

export default gql`
mutation ($_id: MongoID!   ){
    removeVideoOfSubject(_id:$_id){
        recordId
      }
}
`