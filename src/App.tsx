import React from 'react';
import './App.css';
import SuccessContainer from "./containers/SuccesContainer";
import {Switch, Route, useHistory} from "react-router-dom";
import ProtectedRoute from './routes/components/ProtectedRoute';
import api from './services/api/api';
import {useDispatch} from "react-redux";

const loading = (
    <SuccessContainer/>
);

// components
const Layout = React.lazy(() => import('./components/Layout/Layout'));

// pages
const Login = React.lazy(() => import('./pages/Login/Login'));
const NotFound = React.lazy(() => import('./pages/NotFound/NotFound'));

function App() {

    const history: any = useHistory();
    api.subscribe(history);

    return (
        <React.Suspense fallback={loading}>
            <Switch>
                <Route path="/login" component={Login}/>
                <ProtectedRoute path="/" name="Home" component={Layout}/>
                <Route path="*" component={NotFound}/>
            </Switch>
        </React.Suspense>
    );
}

export default App;
