import './header.css';
import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <header className='heading'>
                <h1>Поиск поездов</h1>
            </header>
        );
    }
}

export default Header;