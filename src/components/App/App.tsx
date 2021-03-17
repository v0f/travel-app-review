import React, { useCallback, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, RouteComponentProps } from 'react-router-dom';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MainPage from '../MainPage/MainPage';
import CountryPage from '../CountryPage/CountryPage';
import LoginPage from '../LoginPage/LoginPage';
import Register from '../LoginPage/Register';
import LangContext from '../Language-context/LangContext';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import { AuthProvider } from '../AuthContext/AuthContext';

import ICountry from '../types/ICountry';
import { API_URL } from '../constants';

interface MatchParams {
  id: string;
}

interface MatchProps extends RouteComponentProps<MatchParams> {}

interface HistoryProps extends RouteComponentProps<any> {}

const App: React.FC = () => {
  const fromLS = localStorage.getItem('lang') || 'en';
  const [lang, setLang] = useState<string>(fromLS);
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch(`${API_URL}/countries?lang=${lang}&search=${searchQuery}`)
      .then((data) => data.json())
      .then((countriesResult) => {
        setCountries(countriesResult);
      })
      .catch();
  }, [lang, searchQuery]);

  const changeLang = useCallback((language: string) => {
    setLang(language);
    localStorage.setItem('lang', language);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <React.Fragment>
        <AuthProvider>
          <LangContext.Provider value={{ lang, changeLang }}>
            <Header setSearchQuery={setSearchQuery} />
          <Route
            path='/'
            render={({ history }: HistoryProps) => (
              <MainPage history={history} countriesList={countries}>
                {[]}
              </MainPage>
            )}
            exact
          />
          <Route
            path='/country/:id'
            render={({ match }: MatchProps) => <CountryPage id={match.params.id} />}
          />
          <Route path='/login' component={LoginPage} />
          <Route path='/register' component={Register} />

            <Footer />
          </LangContext.Provider>
        </AuthProvider>
      </React.Fragment>
    </Router>
  );
};

export default App;
