import React from 'react';
import {Breadcrumb} from "antd";
import styled from "styled-components";
import {Link, useLocation} from "react-router-dom";

const breadcrumbNameMap: any = {
    '/dashboard': 'Dashboard',
    '/bank': 'Bank list',
    '/bank/add': 'Add bank',
    '/bank/:id': 'Update bank',
    '/user': 'Users',
    '/user/:id': 'Update user',
};

const StyledBreadcrumb = () => {

    const location = useLocation();
    const pathSnippets = location.pathname.split('/').filter(i => i);
    const extraBreadcrumbItems = pathSnippets.map((_, index) => {
        const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
        return (
            <Breadcrumb.Item key={url}>
                <Link to={url}>{breadcrumbNameMap[url]}</Link>
            </Breadcrumb.Item>
        );
    });
    const breadcrumbItems = [
        <Breadcrumb.Item key="home">
            <Link to="/">
                Home
            </Link>
        </Breadcrumb.Item>,
    ].concat(extraBreadcrumbItems);

    return (
        <BreadcrumbWrapper>
            <Breadcrumb>{breadcrumbItems}</Breadcrumb>
        </BreadcrumbWrapper>
    );
};

export default StyledBreadcrumb;

const BreadcrumbWrapper = styled.div`
  background-color: #fff;
  padding: 1rem;
  margin: 1rem;
  border-radius: 4px;
  box-shadow: 0 8px 16px 1px rgb(0 0 0 / 5%);
  transition: var(--main-transition);
  cursor:pointer;
  :hover{
    box-shadow: 0 8px 16px 1px rgb(0 0 0 / 1%);
  }
  .breadcrumb-item{
    
  }
`;