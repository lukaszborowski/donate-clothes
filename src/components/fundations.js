import React, {Component} from 'react';


class Fundations extends Component {

    state = {
        orgs: [
            {
                name: `Organizacja na rzecz powodzi`,
                goal: 'Pomoc na rzecz rodzinom po powodziach',
                items: 'ubrania, jedzenie, sprzęt AGD, meble, zabawki'
            },
            {
                name: `Fundacja "Dla dzieci"`,
                goal: 'Pomoc dzieciom z ubogich rodzin',
                items: 'ubrania, meble, zabawki'
            },
            {
                name: `Fundacja "Bez domu"`,
                goal: 'Pomoc osobom bezdomnym',
                items: 'ubrania, jedzenie, ciepłe koce'
            }
            ],
        funds: [
            {
                name: `Fundacja "Dbam o zdrowie"`,
                goal: 'Pomoc osobom znajdującym się w trudnej sytuacji',
                items: 'ubrania, jedzenie, sprzęt AGD, meble, zabawki'
            },
            {
                name: `Fundacja "Dla dzieci"`,
                goal: 'Pomoc dzieciom z ubogich rodzin',
                items: 'ubrania, meble, zabawki'
            },
            {
                name: `Fundacja "Bez domu"`,
                goal: 'Pomoc osobom bezdomnym',
                items: 'ubrania, jedzenie, ciepłe koce'
            },
            {
                name: `Fundacja "Dla psów"`,
                goal: 'Pomoc bezdomnym psom',
                items: 'jedzenie, koce, zabawki'
            },
            {
                name: `Fundacja "Dla sierot"`,
                goal: 'Pomoc osieroconym dzieciom',
                items: 'ubrania, jedzenie, zabawki, meble, sprzęt AGD'
            },
            {
                name: `Fundacja "Dla samotnych matek`,
                goal: 'Pomoc samotnym matkom',
                items: 'ubrania, meble, zabawki, sprzęt AGD, gry'
            },
            {
                name: `Fundacja "Dla chorych"`,
                goal: 'Pomoc osobom chorym',
                items: 'ubrania, koce, meble'
            },
            {
                name: `Fundacja "Dla dzieci"`,
                goal: 'Pomoc dzieciom z ubogich rodzin',
                items: 'ubrania, meble, zabawki'
            },
            {
                name: `Fundacja "Dla seniorów"`,
                goal: 'Pomoc samotnym seniorom',
                items: 'sprzęt AGD, meble, jedzenie, koce, ubrania'
            }
        ],
        currentPage: 1,
        orgPerPage: 3,
        orgSelect: 'fund',
        pagiActive: '1'


    };

    onClickFund = (e) => {
        this.setState({
            orgSelect: e.target.id

        });


    };

    handleClick = (event) =>{
        this.setState({
            currentPage: Number(event.target.id),
            pagiActive: event.target.id
        });
    };

    render() {
        const {funds, currentPage, orgPerPage} = this.state;

        // Logic for displaying todos
        const indexOfLastTodo = currentPage * orgPerPage;
        const indexOfFirstTodo = indexOfLastTodo - orgPerPage;
        const currentTodos = funds.slice(indexOfFirstTodo, indexOfLastTodo);

        const renderTodos = currentTodos.map((org, index) => {
            return (
                    <li className={'org-el'} key={index}>
                        <div>
                            <h3>{org.name}</h3>
                            <p className='org-goal'>Cel i misja: {org.goal}</p>
                        </div>
                        <p className='org-items'>{org.items}</p>
                    </li>

            );
        });


        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(funds.length / orgPerPage); i++) {
            pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
            return (
                <li className='pagination'
                    key={number}
                    id={number}
                    onClick={this.handleClick}
                    style={this.state.pagiActive===number.toString()?{border: '1px solid black'}:null}
                >
                    {number}
                </li>
            );
        });




        return (
            <section className='fundation-list'>
                <h1>Komu pomagamy?</h1>
                <div className="decoration"></div>
                <ul className="select-fundation">
                    <li onClick={this.onClickFund} id={'fund'} style={this.state.orgSelect==='fund'?{border: '1px solid black'}:null}>Fundacjom</li>
                    <li onClick={this.onClickFund} id={'org'} style={this.state.orgSelect==='org'?{border: '1px solid black'}:null}>Organizacjom pozarządowym</li>
                    <li onClick={this.onClickFund} id={'local'} style={this.state.orgSelect==='local'?{border: '1px solid black'}:null}>Lokalnym zbiórkom</li>
                </ul>
                <p className='fundation-info'>W naszej bazie znajdziesz listę zwerifikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić
                    czym się zajmują, komu pomagają i czego potrzebują</p>
                <ul className='org-list'>
                    {renderTodos}
                </ul>
                <ul id="page-numbers">
                    {renderPageNumbers}
                </ul>


            </section>
        )

    }

}

export default Fundations