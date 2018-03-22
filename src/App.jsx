import React, { Component } from 'react';
import Main from './components/Main';
import SubMain from './components/Sub-main';
import { Route, Switch, Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import store from './store/index';
import { Provider } from 'react-redux';
import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';

const history = createBrowserHistory();


class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Provider store={store}>
            <div className="app-container">         
              <Header/>
              <Route exact path={process.env.PUBLIC_URL + '/'} component={Main} />
              <Route path='/p:name' component={SubMain} />
              <Route path='/about' component={About} />
              <Footer/>
            </div>  
          </Provider>    
        </Switch>
      </Router>
    );
  }
}

export default App;
