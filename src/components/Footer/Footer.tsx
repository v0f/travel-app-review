import React from 'react';
import LangContext from '../Language-context/LangContext';
import dict from '../../data/dictionary';

import './Footer.scss'

interface IFooter {
    class: string;
}

const Footer: React.FC<IFooter> = ( props)  => {
    const { lang } = React.useContext(LangContext);

    return (
        <footer className={'footer ' + props.class}>
            <div className="text-wrapper">
                <span className="git_links">
                    {dict.madeBy[lang]}
                    <a className="git_link" href="https://github.com/katkopikat">katkopikat</a>  |
                    <a className="git_link"href="https://github.com/yulia-kri">yulia-kri</a>  |
                    <a className="git_link" href="https://github.com/v0f">v0f</a>  |
                    <a className="git_link" href="https://github.com/akulaualiaksei">akulaualiaksei</a>
                </span>
                <span className="year">2021</span>
            </div>
            <a className="rs__link" href="https://rs.school/js/">
                <img className="logo__img" src="https://rs.school/images/rs_school_js.svg" alt="rsschool logo"/>
            </a>
        </footer>
        )
}

export default Footer;
