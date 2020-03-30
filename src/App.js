import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TestComponent from './pages/TestComponent';

class App extends Component {
    static username = 'steve';

    static getname = () => {};
    state = {
        name: 'jojo'
    };

    render() {
        return (
            <div className="App">
                <TestComponent />
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                        Learn React
                    </a>
                </header>
                {this.state.name}
            </div>
        );
    }
}
export default App;
