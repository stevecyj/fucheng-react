import React, { Component } from 'react';
import styles from './style.module.css';

class index extends Component {
    render() {
        return (
            <div className={styles.wrap}>
                <header>我是頭部</header>
                <section>我是內容</section>
                <footer>我是底部</footer>
            </div>
        );
    }
}

export default index;
