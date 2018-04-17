import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers/reducer'
import thunk from 'redux-thunk'
import rootReducer from './rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension';

const enhance = applyMiddleware(thunk)

const store = createStore(
  rootReducer,
  composeWithDevTools(enhance)
)
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
     <App />
    </Provider>
  </BrowserRouter>

, document.getElementById('root'));
registerServiceWorker();
