import React, { ReactElement } from 'react';
import ReactDOM from 'react-dom';
import Counter1 from './components/Counter1';
import Counter2 from './components/Counter2';
import NavBar from './components/NavBar';
import User from './components/User';
import { Provider } from 'react-redux';
import { Route, Link, Redirect, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import store from './store';
import history from './history';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
let { Content } = Layout;
ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Layout>
                <NavBar />
                <Content style={{ padding: '20px' }}>
                    <Switch>
                        <Route path="/counter1" component={Counter1} />
                        <Route path="/counter2" component={Counter2} />
                        <Route path="/user" component={User} />
                        <Redirect to="/counter1" />
                    </Switch>
                </Content>
            </Layout>
        </ConnectedRouter>
    </Provider>, document.getElementById('root'));

