import React, { useCallback, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, RouteComponentProps } from 'react-router-dom';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MainPage from '../MainPage/MainPage';
import CountryPage from '../CountryPage/CountryPage';
import LangContext from '../Language-context/LangContext';

import ICountry from '../types/ICountry';
import { API_URL } from '../constants';

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
  const [countries, setCountries] = useState<ICountry[]>([]);

  const [countriesList, setCountriesList] = useState<ICountry[]>([]);

  useEffect(() => {
    fetch(`${API_URL}/countries?lang=${lang}`)
      .then((data) => data.json())
      .then((countriesResult) => {
        setCountriesList(countriesResult);
        setCountries(countriesResult);
      })
      .catch();
  }, [lang]);

  // const updateCountries = useCallback((list: Array<string>) => {
  const updateCountries = useCallback((list: Array<ICountry>) => {
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
          <Header countries={countriesList} updateCountries={updateCountries} />

          <Route
          path='/'
          render={({ history }: HistoryProps) => (
            // <MainPage history={history} countriesList={countriesList}>{countries}</MainPage>
            <MainPage history={history} countriesList={countries}>{[]}</MainPage>
          )}
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