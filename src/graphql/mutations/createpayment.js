import gql from 'graphql-tag'

export default gql`
mutation ($customer: MongoID $slip: String $date: Date $time: Date ){
    createPayment(record: {
        customer:$customer
          slip: $slip,
          date:$date,
          time:$time
        }) {
        recordId
    }
}
`
