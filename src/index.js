import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Bottom from './Bottom';
import SettingsContextProvider from './Dashboard/Page1/context/SettingContext';

ReactDOM.render(
  <SettingsContextProvider>
    <App />
    <Bottom/>
  </SettingsContextProvider>,
  document.getElementById('root')
);