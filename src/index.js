import React from 'react';
import { createRoot } from 'react-dom/client';


import 'reset-css/reset.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {init} from './components/text-loader';


const root = createRoot(document.getElementById("root"));

init().then(() => root.render(<App/>))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
