import React, { Component } from 'react';
import './style.css';

class index extends Component {
    render() {
        return (
            <div>
                測試組件
                <h1 style={{ color: 'red', fontSize: 36 }}>我是h1標題</h1>
                <p className="content">我是哈哈哈p段落</p>
                <LoadingBar loading={true} />
            </div>
        );
    }
}

const LoadingBar = ({ loading }) => {
    return <div className="wrap">{loading ? <div>加載中…</div> : null}</div>;
};

export default index;
