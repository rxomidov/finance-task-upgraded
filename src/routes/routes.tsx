import React from 'react';

const Dashboard = React.lazy(() => import('../pages/Dashboard/Dashboard'));

const Bank = React.lazy(() => import('../pages/Bank/Bank'));
const BankInfo = React.lazy(() => import('../pages/Bank/BankInfo'));
const AddBank = React.lazy(() => import('../pages/Bank/AddBank'));

const Users = React.lazy(() => import('../pages/Users/Users'));
const UserInfo = React.lazy(() => import('../pages/Users/UserInfo'));


const routes = [
    {path: '/', exact: true, name: "Home"},
    {path: '/dashboard', exact: true, name: "Dashboard", component: Dashboard},

    {path: '/bank', exact: true, name: "Banks", component: Bank},
    {path: '/bank/add', exact: true, name: "Add bank", component: AddBank},
    {path: '/bank/:id', exact: false, name: "Bank info", component: BankInfo},

    {path: '/users', exact: true, name: "Users", component: Users},
    {path: '/users/:id', exact: true, name: "Users", component: UserInfo},
];

export default routes;