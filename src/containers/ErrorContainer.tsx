import React from 'react';
import errorBg from "../assets/error/errorBg.jpg";
import styled from "styled-components";

interface ErrorInterface {
    message: string
    messageText?: string
    children?: any

}

const ErrorContainer: React.FC<ErrorInterface> = ({message, messageText,children}) => {
    return (
        <Wrapper>
            <div className="text-center">
                <div className="py-4">
                    <img src={errorBg} width={320} alt="error"/>
                </div>
                <div>
                    <h3>
                        {message !== "undefined undefined!" ? message : "Something went wrong!"}
                    </h3>
                    <p>{messageText ? <span>messageText</span> : <span>{"Please refresh page."}</span>}</p>
                </div>
                <div className="d-flex justify-content-center">{children}</div>
            </div>
        </Wrapper>
    );
};

export default ErrorContainer;

const Wrapper = styled.div`
  padding: 1rem;
`;