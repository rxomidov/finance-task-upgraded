import React from 'react';
import {Layout} from "antd";
import styled from "styled-components";

const {Footer} = Layout;

const TheFooter = () => {
    return (
        <FooterWrapper>
            <Footer style={{textAlign: 'center'}}>
                <div>Ant Design UI kit was used.</div>
                <div>{new Date().getFullYear()} Created by RXZ</div>
                {/*<div>La havla vala quvvata illa billah</div>*/}
            </Footer>
        </FooterWrapper>
    );
};

export default TheFooter;

const FooterWrapper = styled.div`
  .ant-layout-footer{
    display: flex;
    justify-content: space-between;
    background: #fff;
  }
`;