import React from 'react';
import {Link} from 'react-router';
import HomeStore from '../stores/HomeStore'
import HomeActions from '../actions/HomeActions';
import {first, without, findWhere} from 'underscore';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = HomeStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        HomeStore.listen(this.onChange);
        HomeActions.getTwoCharacters();
    }

    componentWillUnmount() {
        HomeStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {

        return (
            <div className='container'>
                <h2> Hello React! </h2>
                <p> This is a good place to start your Full stack Javascript App Based on MongoDB, Express, React, NodeJS (MERN Stack).</p>
                <p> use: <i> npm run watch </i>and use: <i>  gulp </i>  - for hot-reloading during dev phase.</p>
                <h3> Usage: </h3>
                <li> Main style sheet is at ./app/stylesheets/main.less </li>
                <li> Your server side (nodeJS) code is in ./server.js </li>
                <li> ./models is where you MongoDB Schemas goes. </li>
                <li> ./app has actions, components and stores for React Code.</li>
                <li> ./public is where compiled public source code goes.</li>
            </div>
        );
    }
}

export default Home;