import React, { Component } from 'react';
import './style.css';

class index extends Component {
    render() {
        return (
            <div>
                測試組件
                <h1 style={{ color: 'red', fontSize: 36 }}>我是h1標題</h1>
                <p className="content">我是哈哈哈p段落</p>
                <UserPage name="spider man">
                    <div>class組件的hahahaha</div>
                </UserPage>
                <AppPages>
                    {args => (
                        <div>
                            我是AppPages的子元素<p>{args.name}</p>
                        </div>
                    )}
                </AppPages>
            </div>
        );
    }
}

const UserProfile = ({ name, age, gender }) => {
    return (
        <div>
            <p>姓名：{name}</p>
            <p>年齡：{age}</p>
            <p>性別：{gender}</p>
        </div>
    );
};

const UserPage = props => {
    const { name } = props;
    const title = <h1>這是個人主頁</h1>;
    return (
        <div>
            {title}
            <p>我的名字是 {name}</p>
            <UserProfile name={name} age={23} gender="男" loading={false} />
        </div>
    );
};

const AppPages = props => {
    return (
        <div>
            我是函數組件
            {props.children({ name: 'apple' })}
        </div>
    );
};

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
