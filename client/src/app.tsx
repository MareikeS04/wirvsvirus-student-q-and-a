import React from 'react';
import { ClientContextProvider, createClient } from 'react-fetching-library';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import QuestionList from './pages/question-list';
import './style.css';

const App = () => (
  <ClientContextProvider client={createClient({})}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/questions" component={QuestionList} />
      </Switch>
    </BrowserRouter>
  </ClientContextProvider>
);

export default App;
