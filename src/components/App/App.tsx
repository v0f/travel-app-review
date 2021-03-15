import React, { useCallback, useState } from 'react';
import { BrowserRouter as Router, Route, RouteComponentProps } from 'react-router-dom';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MainPage from '../MainPage/MainPage';
import CountryPage from '../CountryPage/CountryPage';
import LangContext from '../Language-context/LangContext';

import './App.css';
import '../CountryPage/Gallery/gallery.css'

interface MatchParams {
  id: string;
}

interface MatchProps extends RouteComponentProps<MatchParams> {}

interface HistoryProps extends RouteComponentProps<any> {}

const App: React.FC = () => {
  const fromLS = localStorage.getItem('lang') || 'en';
  const [lang, setLang] = useState<string>(fromLS);
  const [countries, setCountries] = useState<Array<string>>([
    'japan',
    'korea',
    'indonesia',
    'philippines',
    'vietnam',
    'laos',
    'myanmar',
    'singapore',
  ]);

  const updateCountries = useCallback((list: Array<string>) => {
    setCountries(list);
  },[]);

  const changeLang = useCallback((language: string) => {
    setLang(language);
    localStorage.setItem('lang', language);
  },[]);

  return (
    <Router>
      <React.Fragment>
        <LangContext.Provider value={{ lang, changeLang }}>
          <Header countries={countries} updateCountries={updateCountries} />

          <Route
          path='/'
          render={({ history }: HistoryProps) => <MainPage history={history}>{countries}</MainPage>}
          exact
          />

          <Route
            path='/country/:id'
            render={({ match }: MatchProps) => <CountryPage id={match.params.id} />}
          />

          <Footer />
        </LangContext.Provider>
      </React.Fragment>
    </Router>
  );
};

export default App;