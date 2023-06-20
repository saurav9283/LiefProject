import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SettingsContextProvider from './Dashboard1/context/SettingContext';
import DashBoard from './Dashboard1/Components/Home/Home';
// import DashBoard2 from './DashBoard2/Home';
import TodoForm from './DashBoard2/Todo/TodoForm';
import MyToDo from './DashBoard2/Todo/MyToDo';
import Setting from '../src/Dashboard4/Home'

ReactDOM.render(
  <SettingsContextProvider><BrowserRouter>
  <Routes>
    <Route path='/' element= {<App />}>
    <Route path='/' element= {<DashBoard/>}/>
    <Route path='/todo' element= {<MyToDo/>}/>
    <Route path='/setting' element= {<Setting/>}/> 
  </Route>
  </Routes>
</BrowserRouter>
  </SettingsContextProvider>,
  document.getElementById('root')
);