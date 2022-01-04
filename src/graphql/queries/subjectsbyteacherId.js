import gql from "graphql-tag";

export default gql`
  query ($teacher: MongoID) {
    subjects(filter: { teacher: $teacher }) {
      _id
      code
      name
      description
      photo
      teacher {
        _id
        firstname
        lastname
        avatar
      }
    }
  }
`;
