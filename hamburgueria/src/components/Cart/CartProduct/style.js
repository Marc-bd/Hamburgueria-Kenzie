import styled from "styled-components";

export const ThemeCart = styled.div`
  display: flex;
  flex-direction: column;
  width: 16rem;

  background-color: #f5f5f5;

  border-radius: 8px;

  .containerVazio {
    text-align: center;
    height: 5rem;

    h2 {
      font-size: 1rem;

      line-height: 24px;
      color: #333333;
    }

    p {
      font-size: 0.7rem;

      color: #828282;
    }
  }

  .containerCart {
    margin: 0.4rem;
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .headerCartProduct {
    display: flex;
    align-items: center;
    font-size: 0.2rem;

    height: 40px;
    background: #27ae60;
    border-radius: 5px 5px 0px 0px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    color: #ffffff;

    h2 {
      font-size: 1rem;
      margin-left: 0.8rem;
    }
  }

  .cardProduct {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .containerImagemProduto {
    img {
      width: 3.3rem;
      background: #e0e0e0;
      border-radius: 5px;
    }
  }

  .containerInfo {
    font-size: 0.6rem;
    display: flex;
    flex-direction: column;

    justify-content: space-evenly;
  }

  .containerRemove {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    span {
      font-size: 1rem;
      font-weight: 700;
      color: #27ae60;
    }

    button {
      width: 4rem;
      height: 1.2rem;
      font-weight: 500;
      font-size: 12px;
      line-height: 15px;
      color: #bdbdbd;
      border: none;
      background: transparent;
    }
  }

  .containerInfoFinal {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    p {
      font-weight: 600;
      font-size: 14px;
      line-height: 24px;
      color: #333333;
    }

    span {
      font-weight: 600;
      font-size: 14px;
      line-height: 24px;
      color: #828282;
    }
  }

  button {
    background: #e0e0e0;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    font-weight: 600;
    line-height: 19px;
    color: #828282;

    align-self: center;
    width: 200px;
    height: 40px;
    font-size: 0.9rem;
  }

  @media screen and (min-width: 290px) {
    align-self: center;
  }

  @media screen and (min-width: 900px) {
    align-self: flex-start;
  }
`;

export const CartUl = styled.ul`
  border-bottom: 2px solid #e0e0e0;
  height: 137px;
  overflow: auto;
`;
