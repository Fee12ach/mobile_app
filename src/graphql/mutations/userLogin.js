import gql from 'graphql-tag'

export default gql`
mutation ($_id: MongoID!) {
  updateUser(record:{
    _id: $_id
  }){recordId}
}
`
