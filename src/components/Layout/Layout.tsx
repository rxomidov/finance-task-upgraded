import React, {useState} from 'react';
import {Layout, Breadcrumb} from 'antd';
import TheSidebar from "./components/Sidebar/TheSidebar";
import TheFooter from "./components/Footer/TheFooter";
import styled from "styled-components";
import StyledBreadcrumb from "../../containers/StyledBreadcrumb";
import TheContent from "./components/Content/TheContent";
import TheHeader from "./components/Header/TheHeader";

const TheLayout = () => {

    const [collapsed, setCollapsed] = useState(false);

    const onCollapse = () => {
        setCollapsed(!collapsed)
    };

    return (
        <LayoutWrapper>
            <Layout style={{minHeight: '100vh'}}>
                <TheSidebar collapsed={collapsed} onCollapse={onCollapse}/>
                <Layout className="site-layout">
                    <TheHeader/>
                    <StyledBreadcrumb/>
                    <TheContent/>
                    <TheFooter/>
                </Layout>
            </Layout>
        </LayoutWrapper>
    );
};

export default React.memo(TheLayout);

const LayoutWrapper = styled.div`
  #components-layout-demo-side .logo {
    height: 32px;
    margin: 16px;
    background: rgba(255, 255, 255, 0.3);
  }

  .site-layout .site-layout-background {
    background: #fff;
  }
`;