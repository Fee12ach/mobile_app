import gql from 'graphql-tag'

export default gql`
  mutation ($_id: MongoID!,$expire: Date $member: EnumUserMember ){
    updateUser(
      record:{
        _id:$_id,
        expire: $expire,
        member: $member,
      })
      {
        recordId
      }
  }
`