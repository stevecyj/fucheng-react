import React, { Component } from 'react';
import './style.css';

class index extends Component {
    render() {
        return (
            <div>
                測試組件
                <h1 style={{ color: 'red', fontSize: 36 }}>我是h1標題</h1>
                <p className="content">我是哈哈哈p段落</p>
                <App user={{ id: '1' }} />
            </div>
        );
    }
}

const App = ({ user }) => {
    let isLogin = false;
    if (user && user.id) isLogin = true;
    return <div>{isLogin ? <div>你已登錄</div> : <div>尚未登錄</div>}</div>;
};

export default index;
