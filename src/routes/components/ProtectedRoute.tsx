import React, {useEffect} from "react";
import {Redirect, Route, useHistory, useLocation} from "react-router-dom";
import {useJwt} from "react-jwt";
import {logoutFromApp} from "../../services/actions/loginActions";
import {useDispatch} from "react-redux";

interface ProtectedRoute {
    component?: any,
    name?: string,
    path?: string,
}

const ProtectedRoute: React.FC<ProtectedRoute> = ({component: Component, ...rest}) => {

    const dispatch = useDispatch();
    const history: any = useHistory();
    const location = useLocation();
    const token: any = localStorage.getItem('token');

    const {isExpired} = useJwt(token);

    // useEffect(()=>{
    //     if (isExpired) {
    //         localStorage.removeItem("token");
    //         history.push("/");
    //     }
    // },[location]);

    return <Route
        {...rest}
        render={(props) =>
            (token) ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: "/login",
                        state: {from: props.location},
                    }}
                />
            )
        }
    />;
};

export default ProtectedRoute;