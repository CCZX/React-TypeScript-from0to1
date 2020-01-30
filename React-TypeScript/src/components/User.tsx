import React from 'react'
import { Link, withRouter, RouteComponentProps } from 'react-router-dom'
import { Layout, Menu } from 'antd'

type Props = RouteComponentProps

class NavBar extends React.Component<Props> {
  render() {
    console.log(this.props)
    return (
      <Layout>
        <Layout.Sider>
          <Menu
            theme="dark"
            mode="horizontal"
            selectedKeys={[this.props.location.pathname]}
          >
            <Menu.Item><Link to="/user/add">Add</Link></Menu.Item>
            <Menu.Item><Link to="/user/list">List</Link></Menu.Item>
          </Menu>
        </Layout.Sider>
      </Layout>
    )
  }
}

export default withRouter(NavBar)
