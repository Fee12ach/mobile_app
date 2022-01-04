import gql from 'graphql-tag'

export default gql`
query ($subject: MongoID) {
    videoofsubjects(filter: {subject: $subject}){
      _id
     name
     link
     thumbnail
    }
  }
`
