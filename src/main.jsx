import React from 'react'
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client'
import store from './store'
import { RickAndMortyApp } from './RickAndMortyApp'
import { HashRouter } from 'react-router-dom';
import './css/index.css';
import './css/themes.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ store }>
      <HashRouter>
        <RickAndMortyApp />
      </HashRouter>
    </Provider>
  </React.StrictMode>,
)
