import React, { Component } from 'react';

class index extends Component {
    render() {
        return <div>測試 es6</div>;
    }
}

const count = 100;
export { count };

class Test {
    constructor(x) {
        this.x = x;
        this.state = {
            name: 'jojo'
        };
        this.getname = this.getname.bind();
    }
    getname(name) {
        return name;
    }
}

const P = new Test();
export default P;
