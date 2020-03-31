import React, { Component } from 'react';
import styles from './style.module.css';

class index extends Component {
    state = {
        count: 0,
        value: null
    };

    addCount() {
        const { count } = this.state;
        this.setState({ count: count + 1 });
    }

    render() {
        const { count } = this.state;
        return (
            <div className={styles.wrap}>
                <header>我是頭部</header>
                <section>
                    我是內容
                    <br />
                    <span>{count}</span>
                    <button onClick={this.addCount.bind(this)}>增加</button>
                    <br />
                    <input
                        type="text"
                        value={this.state.value}
                        onChange={e => this.setState({ value: e.target.value })}
                    />
                    <p>輸入的是：{this.state.value}</p>
                </section>
                <footer>我是底部</footer>
            </div>
        );
    }
}

export default index;
