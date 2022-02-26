import React from 'react';
import noData from "../assets/error/noData.jpg";
import styled from "styled-components";

interface ListInterface {
    name?: string,
    width?: any,
}

const EmptyList:React.FC<ListInterface> = ({name, width}) => {

    return (
        <Wrapper>
            <div className="text-center">
                <img src={noData} width={width ? width : 240} alt="image"/>
                {/*<h6 className="my-2">{name && `${t('articleInfo.noDataYet')} ${name} !`}</h6>*/}
                <h6 className="my-2">No data yet in {name}</h6>
            </div>
        </Wrapper>
    );
};

export default EmptyList;

const Wrapper = styled.div`
  img{
    //width: 240px;
  }
  
  @media screen and (max-width: 576px) {
    img{
      width: 100%;
    }
  }
`;