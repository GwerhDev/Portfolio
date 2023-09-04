import './styles/index.css';
import Router from './app/routes/router';
import React from 'react';
import ReactDOM from 'react-dom/client';
import store from './middlewares/redux/store'
import { Provider } from 'react-redux';
import { HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <HashRouter>
      <Router/>
    </HashRouter>
  </Provider>
);
