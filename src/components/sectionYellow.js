import React, {Component} from 'react';

class YellowBar extends Component {


    render() {

        return (
            <section className='yellow-section'>
                <div className="yellow-element">
                    <h1>10</h1>
                    <h2>Oddanych worków</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere fuga, laudantium nemo perferendis quidem repudiandae!</p>
                </div>

                <div className="yellow-element">
                    <h1>5</h1>
                    <h2>Wspartych organizacji</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere fuga, laudantium nemo perferendis quidem repudiandae!</p>

                </div>

                <div className="yellow-element">
                    <h1>7</h1>
                    <h2>Zorganizowanych zbiórek</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere fuga, laudantium nemo perferendis quidem repudiandae!</p>

                </div>


            </section>
        )
    }


}


export default YellowBar