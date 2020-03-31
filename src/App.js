import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TestComponent from './pages/TestComponent';
import Counter from './pages/Count';

class App extends Component {
    static username = 'steve';

    static getname = () => {};
    state = {
        name: 'jojo',
        loading: true
    };

    render() {
        console.log(this);

        return (
            <div className="App">
                <Counter />

                {this.state.name}
            </div>
        );
    }
}
export default App;
