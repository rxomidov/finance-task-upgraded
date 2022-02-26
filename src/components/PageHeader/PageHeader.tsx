import React from 'react';
import styled from "styled-components";

interface PageHeader {
    header?: string,
    light?: boolean,
    subheader?: string,
    buttons?: any,
}

const PageHeader: React.FC<PageHeader> = ({header, light,subheader,buttons,}) => {
    return (
        <PageHeaderWrapper>
            <div className={`header ${!light && "text-bold"}`}>
                {header}
            </div>
            {subheader && (
                <>
                    <div className="subheader">{subheader}</div>
                    <div className="border-bottom-card"></div>
                </>
            )}
        </PageHeaderWrapper>
    );
};

export default PageHeader;

const PageHeaderWrapper = styled.div`
  /* position: relative; */
  width: 100%;
  display: inline-block;
  margin-bottom: 0px;
  align-items: center;
  justify-content: space-between;
  font-family: "Open Sans",sans-serif;
  /* background: red; */
  
  .border-bottom-card{
    position: absolute;
    right:0;
    width: 100%;
    padding: 8px;
    border-bottom: 1px solid #ebedf3;
    /* background: green; */
  }
  .header{
    font-size: 16px;
  }
  .subheader{
    font-size: 12px;
    font-weight: 400;
    color: #B5B5C3;
  }
  .text-bold{
    font-weight: 500;
  }
`;