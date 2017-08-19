import Reflux from 'reflux'
import Actions from '../actions/Actions'
import * as HTTP from '../services/http'

class AppStore extends Reflux.Store {
  constructor(){
    super();
    this.listenables = Actions;
    this.state = {
      data: []
    }
  }
  getUsers(){
    const self = this;
    HTTP.get('https://reqres.in/api/users?page=2')
    .then((response) => {
      self.setState({ data: response.data });
    })
  }
}

export default AppStore;
