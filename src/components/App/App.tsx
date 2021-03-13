import React, { useState } from 'react';
import { BrowserRouter as Router, Route, RouteComponentProps } from 'react-router-dom';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MainPage from '../MainPage/MainPage';
import CountryPage from '../CountryPage/CountryPage';

import LangContext from '../Language-context';

import './App.css';

interface MatchParams {
  id: string;
}
interface MatchProps extends RouteComponentProps<MatchParams> {}

const App: React.FC = () => {
  const fromLS = localStorage.getItem('lang') || 'en';

  const [lang, setLang] = React.useState(fromLS);

  const changeLang = (language: string) => {
    setLang(language);
    localStorage.setItem('lang', language);
  };

  return (
    <Router>
      <React.Fragment>
        <LangContext.Provider value={{ lang, changeLang }}>
          <Header />

          <Route path='/' component={MainPage} exact />
          <Route
            path='/country/:id'
            render={({ match }: MatchProps) => <CountryPage countryId={match.params.id} />}
          />

          <Footer />
        </LangContext.Provider>
      </React.Fragment>
    </Router>
  );
};

export default App;
