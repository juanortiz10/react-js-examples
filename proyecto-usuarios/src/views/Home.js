import React from 'react';
import Reflux from 'reflux';
import AppStore from '../stores/AppStore';
import Actions from '../actions/Actions';
import '../styles/Home.css';

import Card from '../components/Card'

class Home extends Reflux.Component {
  constructor(){
    super();

    this.state = {};
    this.store = AppStore;
    this.storeKeys = ['data'];
    this.showUsers = this.showUsers.bind(this);
  }
  showUsers(e){
    Actions.getUsers();
  }
  render(){
    let people = this.state.data.map((currentValue, index, array) => {
      return(
        <Card
          key={index}
          id={currentValue.id}
          first_name={currentValue.first_name}
          last_name={currentValue.last_name}
          avatar={currentValue.avatar}/>
      );
    });
    return(
      <div className="Home">
        <div className="Home-header-box">
          <h2 className="Home-header-title">Bienvenido</h2>
          <button onClick={ this.showUsers } className="Home-header-button">Mostrar Usuarios</button>
        </div>
        <div className="Home-body">
          { people }
        </div>
      </div>
    );
  }
}

export default Home;
