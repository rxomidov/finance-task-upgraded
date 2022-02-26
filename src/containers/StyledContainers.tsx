import styled from "styled-components";

export const PageWrapper = styled.div`
  padding: 1rem;
  background: #ffffff;
  color: ${({theme}) => theme.primary};
  backdrop-filter: blur(35px);
  border-radius: 4px;
  transition: var(--main-transition);
  
  .ant-select-selector{
    min-width: 120px;
  }
  .ant-pagination-item{
    border-radius: 8px;
  }
  .ant-pagination-item-link{
    display: flex;
    justify-content:center;
    align-items: center;
    border-radius: 8px;
  }
  .ant-input{
    width: 220px;
  }
  .page-header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    //border-bottom: 2px solid lightskyblue;
    .page-buttons{
      display: flex;
      margin-bottom:0px;
      //div{
      //  margin-left: 0.5rem;
      //}
    }
  }
`;

export const ListWrapper = styled.div`
  //padding: 1rem;
  .ant-btn {
    border: none;
  }
  .divider{
    border-top: 1px dashed rgba(220,220,220,0.75);
    margin: 3px 0;
  }
  .datatable{
    padding: 1rem;
    background-color: ${({theme}) => theme.white};
    border-radius: 8px;
    color:#2c2727b2;
    //box-shadow: 0px 2px 8px rgba(0,0,0,0.05);
  }
  .row-parent{
    box-shadow: 0px 2px 8px rgba(0,0,0,0.0.5);
    border-bottom: 1px solid rgba(0,0,0,0.05);
    &:hover{
      box-shadow: 0px 4px 16px rgba(0,0,0,0.1);
      background-color: rgba(157,255,252,0.1);
      //transform: translateX(4px);
      //border-left: 4px solid mediumspringgreen;
      cursor: pointer;
    }
  }
  .row{
    display: flex;
    align-items: center;
    //padding: 20px;
    font-family: 'Montserrat','Open Sans', sans-serif;
    margin: 0;
    font-weight: 500;
    position:relative;
    color: ${({theme}) => theme.primaryText};
    transition: var(--main-transition);
    .default-avatar{
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 8px;
        box-shadow: 0px 4px 16px rgba(0,0,0,0.05);
        text-transform:uppercase;
        display: flex;
        align-items: center;
        justify-content:center;
        background: rgba(255,151,0,0.1);
        color: rgba(255,151,0,0.9);
    }
    .listIcon{
      flex: 0.3;
      padding: 4px 5px;
      font-size: 12px;
      img{
        width: 3rem;
        height: 3rem;
        border-radius: 8px;
        box-shadow: 0px 4px 16px rgba(0,0,0,0.1);
      }
      .list-id{
        color: dodgerblue;
        font-size: 12px;
      }
    }
    .name{
      flex: 0.5;
      font-size: 12px;
      padding: 5px;
      word-break: break-word; 
      //white-space: nowrap; 
      width: fit-content;
      overflow: hidden;
      text-overflow: ellipsis; 
      text-transform:capitalize;
    }
    .population{
      flex: 1;
      padding: 5px;
      font-size: 12px;
      //white-space: nowrap; 
      width: fit-content;
      overflow: hidden;
      text-overflow: ellipsis; 
      text-transform:capitalize;
    }
    .title_population_09{
        color:#323542 !important;
        font-weight: 600;
    }
    .urgent{
      width: fit-content;
      display: flex;
      justify-content:center;
      align-items: center;
      border-radius: 8px;
      background: rgba(255,2,18,0.1);
      padding: 4px 16px;
      color: rgba(255,2,18,0.8);
    }
    .status{
      div{
        width: fit-content;
        display: flex;
        justify-content:center;
        align-items: center;
        border-radius: 8px;
        background: rgba(32,178,170,0.1);
        padding: 4px 10px;
        color: lightseagreen;
        font-weight: 600;
        font-family:'Montserrat', "Open Sans", sans-serif;
      }
      .Новое{
        //background: rgba(30,144,255,0.1);;
        //color: dodgerblue;
      }
      .подтвеждения{
        background: rgba(100,149,237,0.1);
        color: cornflowerblue;
      }
      .перевозчика{
        background: rgba(255,171,0,0.1);
        color: rgba(255,165,0,0.9);
      }
      .пути{
        background: rgba(144,238,144,0.1);
        color: lightgreen;
      }
      .Доставлена{
        background: rgba(32,178,170,0.1);
        color: lightseagreen;
      }
      .Пассив{
        background: rgba(255,69,0,0.1);
        color: rgba(255,69,0,0.9);
      }
      .Спорное{
        background: rgba(255,255,0,0.1);
        color: yellow;
      }
    }
    .Новое{
        background: rgba(30,144,255,0.1);
        color: dodgerblue;
     }
     .Доставлена{
        background: rgba(32,178,170,0.1);
        color: lightseagreen;
     }
  }
  .heading{
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(0,0,0,0.05) !important;
    color:#2e2a2ae5;
    div{
      border: none;
      background-color: transparent;
      outline: none;
      cursor: pointer;
      //text-transform: capitalize;
      padding: 6px 3px;
      font-size: 11px;
      font-weight: 600;
      text-align: left;
      font-family: 'Montserrat',"Open Sans", sans-serif;
      color:#b5b5c3;
    }
    .heading_listIcon{
      flex: 0.3;
      color: #166280;
      display: flex;
      justify-content: flex-start;
      text-transform:uppercase;
    }
    .heading_name{
      flex: 0.5;
      color: #166280;
      display: flex;
      justify-content: flex-start;
      text-transform:uppercase;
    }
    .heading_population{
      flex: 1;
      color: #166280;
      display: flex;
      justify-content: flex-start;
      text-transform:uppercase;
    }
    .heading_arrow{
      color: #94b9cd;
      display: flex;
      align-items: center;
      margin-left: 0.5rem;
      svg{
        width: 14px;
      }
    }
  }
  .link-user{
    transition: var(--main-transition);
    :hover{
      color: dodgerblue!important;
    }
  }
  
  .MuiButton-root {
    min-width: 3.5rem;
  }
  
@media screen and (max-width: 576px) {
    .row{
      //margin: 1rem 0 1rem;
    }
    .sm-hidden{
      display: none;
    }
  }
`;