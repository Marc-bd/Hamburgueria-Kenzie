import styled from "styled-components";

export const ThemeHeader = styled.header`
  background-color: #f5f5f5;
  gap: 0.7rem;
  height: 7rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 14px;

  h1 {
    margin: 0;
    text-align: center;
  }

  .titleBurguer {
    font-size: 1.3rem;
  }

  .titleKenzie {
    font-size: 0.7rem;
    color: #e60000;
  }
`;

export const ThemeDivInput = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 16rem;
  align-self: center;
  background-color: #ffffff;
  border: 2px solid #e0e0e0;
  border-radius: 8px;

  form {
    display: flex;
    align-items: center;
    width: 254px;
  }

  input {
    width: 10rem;
    height: 2.2813rem;
    border: none;
    background-color: transparent;
    margin-left: 0.4rem;
    &placeholder {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      color: #e0e0e0;
    }
  }
`;
