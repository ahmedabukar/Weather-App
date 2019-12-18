// Imported components from the relative path to the file that holds them
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// 'root' is the overall component of the ReactDOM, which is the view that is rendered on the page
// Here, we pass in the imported App component which comes from the App.js file
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
