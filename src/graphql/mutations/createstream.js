import gql from 'graphql-tag'

export default gql`
mutation ($teacher: MongoID $name: String! $description: String $thumbnail: String $date: Date $starttime: Date $endtime: Date  ){
    createStream(record: {
        teacher: $teacher,
         name: $name,
          thumbnail: $thumbnail,
          date:$date,
          starttime:$starttime,
          endtime:$endtime,
          description:$description
          contentfor:VIP
        }) {
        recordId
    }
}
`
