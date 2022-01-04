import gql from "graphql-tag";

export default gql`
  mutation (
    $_id: MongoID!
    $name: String!
    $thumbnail: String
    $link: String
  ) {
    updateVideoOfSubject(
      record: {
        _id:$_id
        name: $name
        thumbnail: $thumbnail
        link: $link
      }
    ) {
      recordId
    }
  }
`;