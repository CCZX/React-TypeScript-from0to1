import React, { ReactElement } from 'react';
import { Layout, Menu } from 'antd';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';
type Props = RouteComponentProps;
class NavBar extends React.Component<Props> {
    render() {
        return (
            <Layout.Header>
                <Menu
                    theme="dark"
                    style={{ lineHeight: '64px' }}
                    mode="horizontal"
                    selectedKeys={[this.props.location.pathname]}
                >
                    <Menu.Item><Link to="/counter1">counter1</Link></Menu.Item>
                    <Menu.Item><Link to="/counter2">counter2</Link></Menu.Item>
                    <Menu.Item><Link to="/user">用户管理</Link></Menu.Item>
                </Menu>
            </Layout.Header>
        )
    }
}

export default withRouter(NavBar) 