import gql from 'graphql-tag'

export default gql`
mutation ($_id: MongoID!   ){
    removeStream(_id:$_id){
        recordId
      }
}
`
