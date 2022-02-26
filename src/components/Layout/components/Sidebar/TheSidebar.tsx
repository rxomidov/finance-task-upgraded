import React, {useEffect} from 'react';
import {Layout, Menu} from "antd";
import {
     PieChartOutlined, FileOutlined, TeamOutlined, UserOutlined,
} from '@ant-design/icons';
import {Link, useLocation} from "react-router-dom";
import {BankOutlined} from "@ant-design/icons/lib";
import logoMini from "../../../../assets/logoMini.png";
import logo from "../../../../assets/logo.png";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {getBankListStartAct, setFilterParams} from "../../../../services/actions/bankListActions";
import { setUserListFilter, setUserListPagination } from '../../../../services/actions/userListActions';
import { getUserListStartAct } from "./../../../../services/actions/userListActions";

const {SubMenu} = Menu;
const {Sider} = Layout;

const TheSidebar = ({collapsed, onCollapse}: any) => {

    const dispatch = useDispatch();
    const location = useLocation();

    let bankListParams = useSelector((state: any) => state.bankList.paramsData);
    let userListPagination = useSelector((state: any) => state.userList.paginationData);

    useEffect(() => {
        if (location.pathname === "/bank") {
            dispatch(getBankListStartAct(bankListParams));
        }
    }, [dispatch, bankListParams]);

    useEffect(() => {
        if (location.pathname === "/users") {
            dispatch(getUserListStartAct(userListPagination));
        }
    }, [dispatch, userListPagination]);

    const getBank = () => {
        dispatch(setFilterParams({
            PageNumber: 1,
            PageLimit: 10,
        }))
    };

    const getUsers = () => {
        dispatch(getUserListStartAct({
            PageNumber: 1,
            PageLimit: 10,
        }))
        dispatch(setUserListFilter([]))
    };

    return (
        <Wrapper style={{backgroundColor: "#001529"}}>
            <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                <div className="logo p-2">
                    {collapsed ? (
                        <img src={logoMini} alt="logo" height={36}/>
                    ) : (
                        <img src={logoMini} alt="logo" height={36}/>
                    )}
                </div>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1" icon={<PieChartOutlined/>}>
                        <Link to="/dashboard">
                            Dashboard
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<BankOutlined/>} onClick={getBank}>
                        <Link to="/bank">
                            Bank
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="10" icon={<TeamOutlined/>} onClick={getUsers}>
                        <Link to="/users">
                            Users
                        </Link>
                    </Menu.Item>

                    <SubMenu key="sub1" icon={<UserOutlined/>} title="User">
                        <Menu.Item key="3">Tom</Menu.Item>
                        <Menu.Item key="4">Bill</Menu.Item>
                        <Menu.Item key="5">Alex</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" icon={<TeamOutlined/>} title="Team">
                        <Menu.Item key="6">Team 1</Menu.Item>
                        <Menu.Item key="8">Team 2</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="9" icon={<FileOutlined/>}>
                        Files
                    </Menu.Item>
                </Menu>
            </Sider>
        </Wrapper>
    );
};

export default TheSidebar;

const Wrapper = styled.div`
  .logo{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 56px;
  }
`;