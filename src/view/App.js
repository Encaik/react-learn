import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Layout, Icon, Menu } from 'antd';
import Home from './Home';
import User from './User';
import Setting from './Setting';
const { Header, Sider, Content } = Layout;

class App extends Component {
  state = {
    collapsed: false,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  render() {
    return (
      <Router>
        <Layout>
          <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1" onClick={() => {
                console.log('1');
              }}>
                <Icon type="user" />
                <span>首页</span>
                <Link to="/home" />
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="video-camera" />
                <span>用户</span>
                <Link to="/user" />
              </Menu.Item>
              <Menu.Item key="3">
                <Icon type="upload" />
                <span>设置</span>
                <Link to="/setting" />
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: '#fff', padding: 0 }}>
              <Icon
                className="trigger"
                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggle}
              />
            </Header>
            <Content style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 280,
            }}>
              <Route path="/home" component={Home} />
              <Route path="/user" component={User} />
              <Route path="/setting" component={Setting} />
            </Content>
          </Layout>
        </Layout>
      </Router>
    );
  }
}
export default App;
