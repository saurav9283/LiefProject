import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SettingsContextProvider from './Dashboard1/context/SettingContext';

ReactDOM.render(
  <SettingsContextProvider><BrowserRouter>
  <Routes>
  <Route path='/' element= {<App />} />
  </Routes>
</BrowserRouter>
  </SettingsContextProvider>,
  document.getElementById('root')
);