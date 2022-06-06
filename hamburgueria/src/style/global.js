import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{  
   
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    
    
}

ul, li, ol {
    list-style: none
}




button{
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 6.6875rem;
    height: 2.5rem;
   
    background-color: #27ae60;
    color: #ffffff;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    border-radius: 8px;
    border: none;
}




`;
