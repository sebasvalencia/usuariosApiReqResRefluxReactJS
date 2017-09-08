import Reflux from 'reflux';
import Actions from '../actions/Actions';


class AppStore extends Reflux.Store{

  constructor(){
    super();
    this.listenables = Actions;
    this.state={
      data:[]
    }
  }

  getUsers(){
    console.log("se llama getUsers del appStore");
  }

}

export default AppStore;
