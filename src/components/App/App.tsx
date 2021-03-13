import React, { useState } from 'react';
import { BrowserRouter as Router, Route, RouteComponentProps } from 'react-router-dom';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MainPage from '../MainPage/MainPage';
import CountryPage from '../CountryPage/CountryPage';

import './App.css';

interface MatchParams {
  id: string;
}
interface MatchProps extends RouteComponentProps<MatchParams> {}

const dataCount = require('../../data/data-countries.json');

const App: React.FC = () => {
  const [countries, setCountries] = useState<Array<string>>([
    'japan',
    'korea',
    'indonesia',
    'philippines',
    'vietnam',
    'laos',
    'myanmar',
    'singapore',
  ])

  const updateCountries = (list:Array<string>) => {
    setCountries(list)
  };

  return (
    <Router>
      <React.Fragment>
        <Header
          countries={countries}
          updateCountries={updateCountries}
        />

        <Route path='/' render = {() => <MainPage>{countries}</MainPage>} exact />
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
