import React, { useState } from 'react'
import { API_URL } from '../constants';
import request from '../../helpers/request';

export interface IAuthContext {
  userName?: string;
  userLogin?: string;
  token?: string;
  login: (l: string, p: string) => void;
  register?: (l: string, p: string) => void;
  logout?: () => void;
};

const AuthContext = React.createContext<IAuthContext>({ login: () => {} });

const AuthProvider: React.FC = (props) => {
  AuthProvider.displayName = 'AuthProvider';
  // code for pre-loading the user's information if we have their token in
  // localStorage goes here
  const [user, setUser] = useState({userLogin: '', token: ''});

  const login = (login: string, password: string) => {
    request('POST', `${API_URL}/users/login`, {login, password})
      .then((data) => {
        if (data.user) {
          localStorage.setItem('token', data.user.token);
          setUser({userLogin: data.user.login, token: data.user.token});
        }
      })
      .catch();
  }

  const register = () => {}

  const logout = () => {}

  return (
    <AuthContext.Provider value={{...user, login, logout, register}} {...props} />
  )

}

const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth }
