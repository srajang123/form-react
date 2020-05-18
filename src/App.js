import React,{Component} from 'react';
import UserFrom from './components/UserForm';

import logo from './logo.svg';
import './App.css';
import UserForm from './components/UserForm';

export default class App extends Component{
  render=()=>{
    return (<div className='App'>
      <UserForm/>
    </div>)
  }
}
