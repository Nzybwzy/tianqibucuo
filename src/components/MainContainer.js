/*
 * 
 */
import React from 'react';
import { Layout, Menu, Icon } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;
import { connect } from 'dva';
import l from './MainContainer.less';
import cx from 'classnames';
class MainContainer extends React.Component {
    render() {
        const {children, params, location} = this.props;
        // 
        return (
            <div className={l.main}>
            <Layout style={{position: "absolute", width: "100%", height: "100%"}}>
                  <Header style={{color: "#fff"}}>Header</Header>
                  <Layout>
                    <Sider style={{overflowY: "auto"}}>
                        <Menu
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            mode="inline"
                            theme="dark"
                        >
                            <Menu.Item key="1">
                            <Icon type="pie-chart" />
                            <span>Option 1</span>
                            </Menu.Item>
                            <Menu.Item key="2">
                            <Icon type="desktop" />
                            <span>Option 2</span>
                            </Menu.Item>
                            <Menu.Item key="3">
                            <Icon type="inbox" />
                            <span>Option 3</span>
                          </Menu.Item>
                          <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
                            <Menu.Item key="5">Option 5</Menu.Item>
                            <Menu.Item key="6">Option 6</Menu.Item>
                            <Menu.Item key="7">Option 7</Menu.Item>
                            <Menu.Item key="8">Option 8</Menu.Item>
                          </SubMenu>
                          <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
                            <Menu.Item key="9">Option 9</Menu.Item>
                            <Menu.Item key="10">Option 10</Menu.Item>
                            <SubMenu key="sub3" title="Submenu">
                              <Menu.Item key="11">Option 11</Menu.Item>
                              <Menu.Item key="12">Option 12</Menu.Item>
                            </SubMenu>
                          </SubMenu>
                        </Menu>
                    </Sider>
                    <Content>Content</Content>
                  </Layout>
                  <Footer>Footer</Footer>
                </Layout>
            </div>
        );
    }
}

export default connect(state => {
    const {  } = state;
    return {
        
    }
})(MainContainer);