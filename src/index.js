import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

import { Provider } from "react-redux";
import rootReducer from "./rootReducer";
import { createStore } from "redux";

const store = createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__
  && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  
    <Provider store={store}>
      <App />
    </Provider>,
  
  document.getElementById('root')
);


