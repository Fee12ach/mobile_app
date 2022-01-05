import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
// import { HttpLink } from 'apollo-link-http'
import { onError } from 'apollo-link-error'
import { ApolloLink } from 'apollo-link'
import { WebSocketLink } from '@apollo/client/link/ws'

import { checkTokenExpired } from './contexts/AuthContext'

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers = {} }) => {
    const { token, user } = checkTokenExpired(localStorage.getItem('token'))
    if (token && user) {
      return {
        headers: {
          ...headers,
          Authorization: `Bearer ${token}`,
        },
      }
    }
    return { headers }
  })
  return forward(operation)
})

// const httpLink = new HttpLink({
//   uri: process.env.REACT_APP_GRAPHQL_SERVER,
// })
// console.log('pro', process.env);
const wsLink = new WebSocketLink({
  uri: "ws://localhost:8000/graphql",
  options: {
    reconnect: true,
  },
})

// const splitLink = split(
//   ({ query }) => {
//     const definition = getMainDefinition(query)
//     return (
//       definition.kind === 'OperationDefinition'
//       && definition.operation === 'subscription'
//     )
//   },
//   httpLink,
//   wsLink,
// )

const client = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors) {
        console.error({ graphQLErrors })
      }
      if (networkError) {
        console.error({ networkError })
        // if (networkError.statusCode === 401) {
        //   removeToken()
        // }
      }
    }),
    authMiddleware,
    // splitLink,
    // httpLink,
    wsLink,
  ]),
  cache: new InMemoryCache(),
})

export default client
