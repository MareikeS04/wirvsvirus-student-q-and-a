import React from 'react';
import { ClientContextProvider, createClient } from 'react-fetching-library';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import QuestionList from './pages/question-list';
import QuestionPost from './pages/question-post';

const App = () => (
	<ClientContextProvider client={createClient({})}>
		<BrowserRouter>
			<Switch>
				<Route exact path="/questions" component={QuestionList} />
				<Route exact path="/questions/post" component={QuestionPost} />
			</Switch>
		</BrowserRouter>
	</ClientContextProvider>
);

export default App;
