import React from 'react';
import {Router, Route, hashHistory} from 'react-router';
import Container from './container.js';
import Home from './home.js';
import About from './about.js';
import Posts from './posts.js';
import Post from './post.js';




class App extends React.Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={Container}>
                    <Route path="home" component={Home}></Route>
                    <Route path="about" component={About}></Route>
                    <Route path="posts" component={Posts}>
                        <Route path="post/:num" component={Post}></Route>
                    </Route>
                </Route>
            </Router>
        );
    }
};

export default App;