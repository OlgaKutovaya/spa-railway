import React, {Component} from 'react';
import './main.css'
import SearchInputWithHelperBox from "../SearchInputWithHelperBox/SearchInputWithHelperBox";

class Main extends Component {
    render() {
        return (
            <main className='main-content'>
                <SearchInputWithHelperBox label='Откуда'/>
                <SearchInputWithHelperBox label='Куда'/>
            </main>
        );
    }
}

export default Main;