import React, { Component } from 'react';
import styles from './style.module.scss';

class index extends Component {
    render() {
        return (
            <div className="wrap">
                測試組件
                <h1>我是h1標題</h1>
                <p className={styles.content}>我是哈哈哈p段落</p>
            </div>
        );
    }
}

export default index;
