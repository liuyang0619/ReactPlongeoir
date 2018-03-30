import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Home from './home/Home';

ReactDOM.render(<Home />, document.getElementById('home'));
registerServiceWorker();
