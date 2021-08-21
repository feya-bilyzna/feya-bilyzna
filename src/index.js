import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "materialize-css"
import {ApolloClient, ApolloProvider, InMemoryCache,} from "@apollo/client"
import { concatPagination } from '@apollo/client/utilities';

const cache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                categoryProducts: concatPagination(['categoryName']),
            },
        },
    },
})

const client = new ApolloClient({
    uri: 'https://feya-bilyzna.herokuapp.com/api',
    cache: cache,
});

ReactDOM.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <App/>
        </ApolloProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
