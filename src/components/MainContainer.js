/*
 * 
 */
import React from 'react';
import { Layout, Menu, Icon, Select, Collapse } from 'antd';
const Option = Select.Option;
const Panel = Collapse.Panel;
const { Header, Footer, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;
import { connect } from 'dva';
import l from './MainContainer.less';
import cx from 'classnames';
import {
  getData
} from '../services/common';

class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }
  componentDidMount() {
    getData()
      .then(data => {
        console.log(data)
        // this.setState({
        //   data: data.people
        // })
      }, err => {
        console.log(err)
        this.setState({
          data: err.people
        })
      })
      .catch(data => {
        //  this.setState({
        //   data: data.people
        // })
      })
  }
  handleChange = () => {

  }
  render() {
    const { children, params, location } = this.props;
    const { data } = this.state;
    console.log(data)
    return (
      <div className={l.main}>
        <Layout style={{ position: "absolute", width: "100%", height: "100%" }}>
          <Header style={{ color: "#fff" }}>Header</Header>
          <Layout>
            <Sider style={{ overflowY: "auto" }}>
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
            <Content>
              <Collapse defaultActiveKey={['0']}>
                {
                  data && data.length && data.map((item, index) => {
                    return (
                      <Panel header={item.firstName} key={index}>
                        <p>lastName: {item.lastName}, email: {item.email}</p>
                      </Panel>
                    )
                  })
                }

              </Collapse>
            </Content>
          </Layout>
          <Footer>
            <p className="foot">
              <a style={{color: "#000"}} target="_blank" href="http://www.beian.miit.gov.cn" rel="nofollow">京ICP备17058230号-1</a>
            </p></Footer>
        </Layout>
      </div>
    );
  }
}

export default connect(state => {
  const { } = state;
  return {

  }
})(MainContainer);