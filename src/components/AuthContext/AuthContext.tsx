import React, { useState } from 'react'
import { API_URL } from '../constants';
import request from '../../helpers/request';

export interface IAuthContext {
  userName?: string;
  userLogin?: string;
  token?: string;
  login: (l: string, p: string) => void;
  register: (l: string, p: string, u: string) => void;
  logout?: () => void;
};

const AuthContext = React.createContext<IAuthContext>({ login: () => {}, register: () => {} });

const AuthProvider: React.FC = (props) => {
  AuthProvider.displayName = 'AuthProvider';

  const [user, setUser] = useState({userLogin: '', token: '', avatarUrl: ''});

  const logout = () => {
    localStorage.setItem('token', '');
    setUser({userLogin: '', token: '', avatarUrl: ''});
  }

  const autoLogin = () => {
    const token = localStorage.getItem('token');
    if (token) {
      request('GET', `${API_URL}/users/current`, false, token)
      .then((user) => {
        if (user.login) {
          localStorage.setItem('token', user.token);
          setUser({userLogin: user.login, token: user.token, avatarUrl: user.avatarUrl});
        } else {
          logout();
        }
      })
      .catch();
    }
  };

  useEffect(autoLogin, []);

  const login = (login: string, password: string) => {
    request('POST', `${API_URL}/users/login`, {login, password})
      .then((data) => {
        if (data.user) {
          localStorage.setItem('token', data.user.token);
          setUser({userLogin: data.user.login, token: data.user.token, avatarUrl: data.user.avatarUrl});
        }
      })
      .catch();
  }

  const register = async (login: string, password: string, avatarUrl: string) => {
    const data = await request('POST', `${API_URL}/users/`, {login, password, avatarUrl});
    if (data.newUser) {
      localStorage.setItem('token', data.newUser.token);
      setUser({userLogin: data.newUser.login, token: data.newUser.token, avatarUrl});
      return true;
    }
    return false;
  }

  return (
    <AuthContext.Provider value={{...user, login, logout, register}} {...props} />
  )

}

const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth }
