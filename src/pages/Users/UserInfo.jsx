import React from 'react'
import { useParams } from 'react-router-dom';
import { PageWrapper } from "./../../containers/StyledContainers";

const UserInfo = () => {

    const {id} = useParams();

    return (
        <PageWrapper>
            UserInfo {id} 
        </PageWrapper>
    )
}

export default UserInfo;
