import alt from '../alt';
import HomeActions from '../actions/HomeActions';

class HomeStore {
    constructor() {
        this.bindActions(HomeActions);
        //Add a variable for all state variables here
        this.variable = ''
    }

    onSomeThingHappened(data) {
        this.variable = data;
    }

}

export default alt.createStore(HomeStore);