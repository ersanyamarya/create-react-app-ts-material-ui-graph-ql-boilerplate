import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'
import { graphqlURL } from './config'

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: graphqlURL,
  }),
})

export default client
