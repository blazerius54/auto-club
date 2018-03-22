import React, { Component } from 'react';
import Main from './components/Main';
import SubMain from './components/Sub-main';
import { Route, Switch, Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import store from './store/index';
import { Provider } from 'react-redux';
import './App.scss';
import Menu from './components/Menu';
import Footer from './components/Footer';

const history = createBrowserHistory();


class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Provider store={store}>
            <div className="app-container">         
              <Menu/>
              <Route exact path='/' component={Main} />
              <Route exact path='/:name' component={SubMain} />
              <Footer/>
            </div>  
          </Provider>    
        </Switch>
      </Router>
    );
  }
}

export default App;
