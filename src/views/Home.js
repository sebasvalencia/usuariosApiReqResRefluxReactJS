import React, {Component} from 'react';
import '../styles/Home.css';
import Reflux from 'reflux';
import AppStore from '../stores/AppStore';
import Actions from '../actions/Actions';

class Home extends Reflux.Component{

  constructor(){
    super();
    this.state={};

    this.store = AppStore;
    this.storeKeys = ['data'];//va a ser la var de estado q se comparte entre store y home

    this.showUsers = this.showUsers.bind(this);
  }

  showUsers(e){
    console.log("Mostrar usuarios del home");
    Actions.getUsers();

  }

  render(){
    return (
      <div className="Home">
      <div className="Home-header-box">
        <h2 className="Home-header-title">Bienvenido</h2>
        <button onClick={this.showUsers} className="Home-header-button">Mostrar usuarios</button>
      </div>
      </div>
    );
  }

}

export default Home;
