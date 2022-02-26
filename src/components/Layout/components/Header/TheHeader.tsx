import React from 'react';
import styled from "styled-components";
import {Button, Dropdown, Layout, Menu} from "antd";
import {NavLink, useHistory} from "react-router-dom";
import {LogoutOutlined, UserOutlined} from '@ant-design/icons';
import logo from "../../../../assets/logoMini.png"

const {Header} = Layout;

const TheHeader = () => {

    const history = useHistory();

    const menu = (
        <Menu>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                    1st menu item
                </a>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                    2nd menu item
                </a>
            </Menu.Item>
            <Menu.Item>
                <div className="d-flex align-items-center"
                    onClick={() => {
                        history.push('/login');
                        localStorage.clear()
                    }}
                >
                    <LogoutOutlined className="me-2"/>
                    <div>Sing Out</div>
                </div>
            </Menu.Item>
        </Menu>
    );

    return (
        <Wrapper>
            <Header className="header">
                <div className="d-flex align-items-center">
                    <div className="header-brand d-block d-md-none ms-4">
                        <img src={logo} alt="logo" height={32}/>
                    </div>
                    <nav className="d-none d-md-block">
                        <ul className="styled-ul">
                            <li>
                                <NavLink activeClassName="active" to="/dashboard">
                                    dashboard
                                </NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName="active" to="/bank">
                                    banks
                                </NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName="active" to="/users">
                                    users
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="dropdown-group">
                    <Dropdown.Button overlay={menu} placement="bottomRight" icon={<UserOutlined/>}>
                        Username
                    </Dropdown.Button>
                </div>
            </Header>
        </Wrapper>
    );
};

export default TheHeader;

const Wrapper = styled.div`
 .ant-layout-header {
  padding: 0;
  height: 56px;
 }
 .header{
  backdrop-filter: blur(35px);
  background: rgba(255,255,255,0.8);
  display: flex;
  align-items: center;
  justify-content: space-between;
 } 
  .styled-ul{
    display: flex;
    list-style: none;
    margin: 0;
    padding-left: 0.5rem;
    .active{
      background: rgba(0,0,0,0.05);
      color:#3699ff !important;
    }
    li{
      margin-right: 1rem;
      a{
        text-decoration: none;
        padding: 0.6rem 1rem;
        text-transform: capitalize;
        border-radius: 4px;
        color: ${({theme}) => theme.primary};
        &:hover{
            color:#3699ff !important;
            background: #f5f5f9;
        }
      }
    }
  }
  .dropdown-group{
    display: flex;
    align-items: center;
    margin-right: 1rem;
  }
`;