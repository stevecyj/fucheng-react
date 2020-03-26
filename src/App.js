import React from 'react';
import logo from './logo.svg';
import './App.css';
import TestComponent from './pages/TestComponent';

function App() {
    const str = 'hello';
    const arr = [1, 2, 3];

    console.log(str.includes('o'));
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
        </div>
    );
}

export default App;
