import React, {Component} from 'react';
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
            <div className="btn-log">
                <NavLink>Załóż konto</NavLink>
            </div>
        )
    }

}


class Steps extends Component{
render() {

    return (
        <section className="steps">
            <h1>Wystarczą 4 proste kroki</h1>
            <div className="decoration-steps"></div>
            <article className='steps-container'>
                <div className="step-el">
                    <h2>Wybierz rzeczy</h2>
                    <hr/>
                    <p>ubrania,zabawki,sprzęt i inne</p>

                </div>
                <div className="step-el">
                    <h2>Spakuj je</h2>
                    <hr/>
                    <p>skorzystaj z worków naśmieci</p>

                </div>
                <div className="step-el">
                    <h2>Zdecyduj komu chcesz pomóc</h2>
                    <hr/>
                    <p>wybierz zaufane miejsce</p>

                </div>
                <div className="step-el">
                    <h2>Zamów kuriera</h2>
                    <hr/>
                    <p>kurier przyjedzie w dowolnym terminie</p>

                </div>

            </article>
          <Button/>
        </section>


    )
}


}


export default Steps