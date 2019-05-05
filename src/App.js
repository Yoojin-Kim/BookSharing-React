import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Main from './pages/Main';
import List from './pages/List';


class App extends Component {
    
    render() {
        
        return (
            <div>
                <Route exact path="/" component={Main}/>
                <Route path="/list/:keyword" component={List}/>
            </div>
        );
    }
}

export default App;