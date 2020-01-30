import React from 'react'
import { Link, withRouter, RouteComponentProps } from 'react-router-dom'
import { Layout, Menu } from 'antd'

type Props = RouteComponentProps

class NavBar extends React.Component<Props> {
  render() {
    return (
      <Layout.Header>
        <Menu
          theme="dark"
          style={{lineHeight: '64px'}}
          mode="horizontal"
          selectedKeys={[this.props.location.pathname]}
        >
          <Menu.Item><Link to="/counter1">Counter1</Link></Menu.Item>
          <Menu.Item><Link to="/counter2">Counter2</Link></Menu.Item>
          <Menu.Item><Link to="/user">User</Link></Menu.Item>
        </Menu>
      </Layout.Header>
    )
  }
}

export default withRouter(NavBar)
