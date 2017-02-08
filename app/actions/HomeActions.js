import alt from '../alt';

class HomeActions {
    constructor() {
        this.generateActions(
            'onSomeThingHappened',
        );
    }

    onSomeThing() {
        this.actions.onSomeThingHappened();
    }
}

export default alt.createActions(HomeActions);