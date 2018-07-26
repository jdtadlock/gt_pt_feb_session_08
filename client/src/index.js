import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

export const UPDATE_TITLE = 'UPDATE TITLE';
export const UPDATE_NAME = 'UPDATE NAME';
export const UPDATE_QUOTE = 'UPDATE QUOTE';

function reducer(state, {type, payload}) {
  switch(type) {
    case UPDATE_TITLE:
      return { ...state, title: payload };
    case UPDATE_NAME:
      return { ...state, name: payload };
    case UPDATE_QUOTE:
      return { ...state, quote: payload };
    default:
      return state;
  }
}

const enhancers = compose(
  applyMiddleware(thunk)
);

const state = {
  title: 'Our Initial Title',
  name: 'Bob',
  quote: ''
};

const store = createStore(reducer, state, enhancers);


// function changeTitle(title) {
//   store.dispatch({
//     type: UPDATE_TITLE,
//     payload: title
//   });
// }

// function changeName(name) {
//   store.dispatch({
//     type: UPDATE_NAME,
//     payload: name
//   });
// }

// changeTitle('New Title');
// changeName('JD');

// console.log(store.getState());

ReactDOM.render((
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
), document.getElementById('root'));
registerServiceWorker();
