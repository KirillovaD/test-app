import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <App/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// let users = [
//     {
//         name: "Daria",
//         age: 36,
//         address: {
//             city: "Moscow",
//             country: "Russia"
//         }
//     },
//     {
//         name: "Kirill",
//         age: 38,
//         address: {
//             city: "Moscow",
//             country: "Russia"
//         }
//     }
// ]


// let a: Array <number>;
// a= [1,3,4,5,7,8,9];
// a= [];
// a = ["dfadf","fdfdf"]
// a = [false, true]
// console.log(users[0].address.city)