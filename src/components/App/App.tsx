import React from 'react';
import { BrowserRouter as Router, Redirect, Route, RouteComponentProps } from 'react-router-dom';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MainPage from '../MainPage/MainPage';
import CountryPage from '../CountryPage/CountryPage';

import './App.css';

interface MatchParams {
  id: string;
}


interface MatchProps extends RouteComponentProps<MatchParams> {}

const App: React.FC = () => {

  // const redirectCountryPage = (id: string) => {
  //     console.log('переход на ', id)
  // }

  return (
    <Router>
      <React.Fragment>
        <Header />

        <Route
          path='/' exact
          render={() => <MainPage />}
            // redirectCountryPage={redirectCountryPage}}
          />

        <Route
          path='/country/:id'
          render={({ match }: MatchProps) => <CountryPage countryId={match.params.id} />}
        />

        <Footer />
      </React.Fragment>
    </Router>
  );
};

export default App;
