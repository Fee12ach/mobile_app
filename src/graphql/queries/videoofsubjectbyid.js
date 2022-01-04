import gql from 'graphql-tag'

export default gql`
query ($_id: MongoID) {
    videoofsubject(filter: {_id: $_id}){
      _id
     name
     link
     thumbnail
    }
  }
`
