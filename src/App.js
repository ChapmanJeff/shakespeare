import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import { composeStore } from './store/store'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'
import MainView from './components/Views/MainView'
import './App.css'

const history = createHistory()
const historyMiddleware = routerMiddleware(history)

const store = composeStore(historyMiddleware)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Route path='/' component={MainView} />
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App