import React from 'react';
import ReactDOM from 'react-dom/client';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reportWebVitals from './reportWebVitals';
import App from './App';
import rootReducer from './reducers';

const root = ReactDOM.createRoot(document.getElementById('root'));
const composeEnhancers = compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk)),
);

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
