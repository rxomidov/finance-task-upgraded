import React, {Suspense} from 'react';
import {Layout} from "antd";
import {Switch, Route, Redirect,} from "react-router-dom";
import routes from "../../../../routes/routes";
import SuccessContainer from "../../../../containers/SuccesContainer";
import {motion} from "framer-motion";
import {container} from '../../../../utils/motions';
import styled from "styled-components";

const {Content} = Layout;

const TheContent = () => {
    return (
        <Wrapper>
            <Content style={{margin: '0 16px'}}>
                <main className="main">
                    <div className="container-fluid gx-0">
                        <Suspense fallback={<SuccessContainer/>}>
                            <Switch>
                                {routes.map((route, idx) => {
                                    return route.component && (
                                        <Route
                                            key={idx}
                                            path={route.path}
                                            exact={route.exact}
                                            render={(props: any) => (
                                                <motion.div
                                                    variants={container}
                                                    initial="hidden"
                                                    animate="visible">
                                                    <route.component {...props} />
                                                </motion.div>
                                            )}/>
                                    )
                                })}
                                <Redirect from="/" to="/dashboard"/>
                            </Switch>
                        </Suspense>
                    </div>
                </main>
            </Content>
        </Wrapper>
    );
};

export default React.memo(TheContent);

const Wrapper = styled.div`
  margin-bottom: 1rem;
  min-height: 70vh;
`;