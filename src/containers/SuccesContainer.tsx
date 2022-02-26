import React from 'react';
import {MetroSpinner} from "react-spinners-kit";
import styled from "styled-components";

const SuccessContainer = () => {
    return (
        <Wrapper>
            <div className="d-flex align-items-center justify-content-center success">
                <MetroSpinner size={50} color={`rgba(28, 144, 255, 0.5)`} loading={true}/>
            </div>
        </Wrapper>
    );
};

export default SuccessContainer;

const Wrapper = styled.div`
  position:absolute;
  //border-radius: 1rem;
  top: 0;
  right: 0;
  z-index: 99;
  width: 100%;
  height: 100%;
  background: rgba(255,255,255,0.5);
  .success{
    position:absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%,-50%);
    width: 8rem;height: 8rem;
    background: rgba(255,255,255,0.8);
    backdrop-filter: blur(4px);
    box-shadow: 0px 2px 8px rgba(0,0,0,0.1);
    border-radius: 0.5rem;
  }
`;