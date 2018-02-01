import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import './App.css';
import { store } from './redux/store';
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/App.css';



const history = createBrowserHistory()

render(
  <Provider store={store}>
    <Router history={history} >
      <Route path="/" component={App} />

    </Router>
  </Provider>,
  document.getElementById('root')
);

