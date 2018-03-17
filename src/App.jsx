import React, { Component } from 'react';
import Main from './components/Main';
import SubMain from './components/Sub-main';


import { Route, Switch, Router, Link } from 'react-router-dom';

import createBrowserHistory from 'history/createBrowserHistory';
import store from './store/index';
import { Provider } from 'react-redux';



import './App.scss';
import Menu from './components/Menu';
import logo from './images/main/header/car.png'

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
              {/* <Link to={'SubMain'}>
                SubMain
              </Link> */}
              <footer>
                <div className='footer-content'>
                  <div className='copyright'>
                  © Auto Club 2014
                  </div>
                  <div className="menu">
                      <a href="">home</a>
                      <a href="">about</a>
                      <a href="">contact us</a>
                    </div>
                </div>
              </footer>
            </div>  
          </Provider>    
        </Switch>
      </Router>
    );
  }
}

export default App;
