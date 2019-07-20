import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

import App from './App'

const client = new ApolloClient({
  uri: 'https://petgram-server-hecto932.hflores.now.sh/graphql'
})

const app = document.getElementById('app')

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
  , app)
