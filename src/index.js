import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import { AppolloServer, gql } from 'apollo-server';

const typeDefs = gql`
type Query{
  members: [Member]
}
type Member {
  id: ID!,
  firstName: String!,
  lastName: String!,
  startDate: ,
  gender: ,
  endDate: ,
  memberLevel: Int,
  personalTraining: Boolean,
  persTngSessionsPurchased: Int,
  persTngSessionsRemaining: Int,
}`

const server = new ApollowServer({ typeDefs });
server 
  .listen({port: process.env.PORT || 4000})
  .then(({url}) => {
    console.log(`GraphQL running at ${url}`);
  })

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
