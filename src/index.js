import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Bottom from './Bottom';
import Bottombar from './BottomBar/Bottombar';
import SettingsContextProvider from './Dashboard1/context/SettingContext';

ReactDOM.render(
  <SettingsContextProvider>
    <App />
    {/* <Bottombar/> */}
  </SettingsContextProvider>,
  document.getElementById('root')
);