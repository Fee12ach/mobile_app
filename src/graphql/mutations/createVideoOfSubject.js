import gql from "graphql-tag";

export default gql`
  mutation (
    $subject: MongoID
    $name: String!
    $thumbnail: String
    $link: String
  ) {
    createVideoOfSubject(
      record: {
        subject: $subject
        name: $name
        thumbnail: $thumbnail
        link: $link
      }
    ) {
      recordId
    }
  }
`;
