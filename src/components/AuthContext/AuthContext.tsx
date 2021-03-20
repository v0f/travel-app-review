import React, { useState, useEffect } from 'react';
import { API_URL } from '../constants';
import request from '../../helpers/request';

export interface IAuthContext {
  userName: string;
  userLogin: string;
  token: string;
  avatarUrl: string;
  login: (l: string, p: string) => Promise<boolean>;
  register: (l: string, n: string, p: string, u: string) => Promise<boolean>;
  logout?: () => void;
}

const contextDefaults = {
  userName: '',
  userLogin: '',
  token: '',
  avatarUrl: '',
  login: () => new Promise<boolean>(()=>true),
  register: () => new Promise<boolean>(()=>true),
  logout: () => null,
}

// const AuthContext = React.createContext<IAuthContext>({ login: () => {}, register: () => {} });
const AuthContext = React.createContext<IAuthContext>(contextDefaults);

const AuthProvider: React.FC = (props) => {
  AuthProvider.displayName = 'AuthProvider';

  const [user, setUser] = useState({userLogin: '', userName: '', token: '', avatarUrl: ''});

  const logout = () => {
    localStorage.setItem('token', '');
    setUser({userLogin: '', userName: '', token: '', avatarUrl: ''});
  }

  const autoLogin = () => {
    const token = localStorage.getItem('token');
    if (token) {
      request('GET', `${API_URL}/users/current`, false, token)
      .then((user) => {
        if (user.login) {
          localStorage.setItem('token', user.token);
          setUser({
            userLogin: user.login,
            userName: user.name || '',
            token: user.token,
            avatarUrl: user.avatarUrl || ''
          });
        } else {
          logout();
        }
      })
      .catch();
    }
  };

  useEffect(autoLogin, []);

  const login = async (login: string, password: string) => {
    const data = await request('POST', `${API_URL}/users/login`, { login, password });
    if (data.user) {
      localStorage.setItem('token', data.user.token);
      setUser({
        userLogin: data.user.login,
        userName: data.user.name || '',
        token: data.user.token,
        avatarUrl: data.user.avatarUrl
      });
      return true;
    }
    return false;
  };

  const register = async (login: string, name: string, password: string, avatarUrl: string) => {
    const data = await request('POST', `${API_URL}/users/`, { login, name, password, avatarUrl });
    if (data.newUser) {
      localStorage.setItem('token', data.newUser.token);
      setUser({
        userLogin: data.newUser.login,
        userName: data.newUser.name || '',
        token: data.newUser.token,
        avatarUrl
      });
      return true;
    }
    return false;
  };

  return <AuthContext.Provider value={{ ...user, login, logout, register }} {...props} />;
};

const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth };
