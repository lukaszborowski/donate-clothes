import React, {Component} from 'react';
import Navigation from "./navigation"
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

class Button extends Component {

    render() {

        return (
            <div className="btn-element">
                <NavLink>{this.props.text}</NavLink>
            </div>
        )
    }

}


class Header extends Component {

    render() {

        return (
            <header className='header-main'>
                <HashRouter>
                    <Navigation/>
                    <section className="header-section">
                        <h1>Zacznij Pomagać!
                            <br/>
                            Oddaj niechciane rzeczy w zaufane ręce
                        </h1>
                        <div className="decoration-header">
                        </div>
                        <div className='btn-container'>
                            <Button text={'ODDAJ RZECZY'}/>
                            <Button text={'ZORGANIZUJ ZBIÓRKĘ'}/>
                        </div>
                    </section>


                    <Route path='/'/>
                    <Route path='/'/>

                </HashRouter>


            </header>

        )

    }
}

export default Header;