import React, { FunctionComponent } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Route, Link, Redirect, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import { Layout } from 'antd'
import 'antd/dist/antd.css'
import store from './store'
import history from './history'
import Counter1 from './components/Counter1'
import Counter2 from './components/Counter2'
import NavBar from './components/NavBar'
import User from './components/User'
const { Content } = Layout

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Layout>
        <NavBar />
        <Content>
          <Switch>
            {/* <Redirect to="/counter1"></Redirect> */}
            <Route path="/counter1" component={Counter1}></Route>
            <Route path="/counter2" component={Counter2}></Route>
            <Route path="/user" component={User}></Route>
          </Switch>
        </Content>
      </Layout>
    </ConnectedRouter>
  </Provider>, document.getElementById('root')
)
