import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// function formatName(user){
//    return user.name + ' ' + user.age;
// }

// const user = {
//     name : "srikanth",
//     age  : 26
// }

// function  greetingUser(user){
//     if(user) {
//     return <h1>Hello, {formatName(user)}</h1>
//     }
//     return <h1>user not present</h1>
// }
// const name = 'srikanth boddapati';

// function Welcome(props) {
// return <h1>Hello, {props.name}</h1>
//}
// const element = <Welcome name='srikanth'/>
// const element = (
// <h1>
//     Hello, {formatName(user)}
// </h1>
// );
// const element = greetingUser(user);
const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Hello Kitty',
      avatarUrl: 'https://placekitten.com/g/64/64',
    },
  };

ReactDOM.render(<App date = {comment.date} text = {comment.text} author = {comment.author} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
