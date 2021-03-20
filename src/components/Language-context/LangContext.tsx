import React from 'react';

export type LangCtxt = {
  lang: string;
  changeLang: (l: string) => void;
};

const LangContext = React.createContext<LangCtxt>({ lang: 'en', changeLang: () => {} });

export default LangContext;
