import gql from 'graphql-tag'

export default gql`
mutation ($_id: MongoID!   ){
    removeVideo(_id:$_id){
        recordId
      }
}
`
