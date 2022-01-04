import gql from 'graphql-tag'

export default gql`
query ($subject: MongoID) {
    documentofsubjects(filter: {subject: $subject}){
      _id
     name
     link
     thumbnail
    }
  }
`
