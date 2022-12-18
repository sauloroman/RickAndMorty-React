import React from 'react'
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client'
import store from './store'
import { RickAndMortyApp } from './RickAndMortyApp'
import './index.css';
import { HashRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ store }>
      <HashRouter>
        <RickAndMortyApp />
      </HashRouter>
    </Provider>
  </React.StrictMode>,
)
