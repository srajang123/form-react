import React,{Component} from 'react';
import './App.css';
import UserForm from './components/UserForm';

export default class App extends Component{
  componentDidMount=()=>{
    document.title='User Multistep Form';
  }
  render=()=>{
    return (<div className='App'>
      <UserForm/>
    </div>)
  }
}
