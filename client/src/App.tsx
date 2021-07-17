import React, { FC, ReactElement } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import Home from 'scenes/home';
import Details from './scenes/details';
import { MainContainer, RoutesContainer } from './App.styles';

const queryClient = new QueryClient();

const App: FC = (): ReactElement => {
  return (
    <QueryClientProvider client={queryClient}>
      <MainContainer>
        <RoutesContainer>
          <Router>
            <Switch>
              <Route path="/details/:organization/:repo">
                <Details />
              </Route>
              <Route path="/:organization">
                <Home />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Router>
        </RoutesContainer>
      </MainContainer>
    </QueryClientProvider>
  );
};

export default App;
