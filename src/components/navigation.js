import React, {Component} from 'react';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

class LogPanel extends Component {


    render() {
        return (
            <div className="log-panel">
                <NavLink className='log-link'>Zaloguj</NavLink>
                <NavLink className='log-link'>Załóż Konto</NavLink>
            </div>
        )
    }


}


class Navigation extends Component {

    render() {

        return (
            <nav className={'nav'}>
                <LogPanel/>
            <ul className={'nav-menu'}>
                <li className={'nav-menu-el'}><a href="#">Start</a></li>
                <li className={'nav-menu-el'}><a href="#">O co chodzi?</a></li>
                <li className={'nav-menu-el'}><a href="#">O nas</a></li>
                <li className={'nav-menu-el'}><a href="#">Fundacje i organizacje</a></li>
                <li className={'nav-menu-el'}><a href="#">Kontakt</a></li>
            </ul>
            </nav>

        )

    }
}

export default Navigation;