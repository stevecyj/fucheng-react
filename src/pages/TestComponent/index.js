import React, { Component } from 'react';

class index extends Component {
    render() {
        return (
            <div>
                測試組件
                <UserPage>
                    <div>hahahaha</div>
                </UserPage>
            </div>
        );
    }
}

class UserPage extends Component {
    render() {
        return (
            <div>
                hello haha test
                {this.props.children}
            </div>
        );
    }
}

export default index;

// fetch('http://localhost:3005/contacts')
//     .then(
//         response => {
//             console.log(response);
//             return response.json();
//         },
//         error => {
//             console.log(error);
//         }
//     )
//     .then(value => {
//         console.log(value);
//     })
//     .catch(error => {
//         console.log(error);
//     })
//     .finally(() => {
//         console.log('恭喜你哈哈，處理完成了哈哈');
//     });

// function* fn() {
//     const res = yield fetch('http://localhost:3005/contacts');
// }

// const res = fn().next();
// console.log(res);
// res.value
//     .then(res => {
//         return res.json();
//     })
//     .then(data => console.log(data));

// async function getPost() {
//     try {
//         const post = await fetch('http://localhost:3005/contacts').then(res => res.json());
//         console.log(post);
//     } catch (err) {
//         console.log(err);
//     }
// }

// getPost();
