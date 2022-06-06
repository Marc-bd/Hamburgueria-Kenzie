import styled from "styled-components";

export const ProductListUl = styled.ul`
  gap: 0.9rem;

  overflow: auto;
  display: flex;

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 15rem;
    border: 2px solid #e0e0e0;
    border-radius: 5px;
    gap: 0.2rem;
  }

  .containerImg {
    height: 8rem;
    width: 14rem;
    text-align: center;
    background: #f5f5f5;
  }

  .containerInfo {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 12rem;
    height: 6.5rem;
    gap: 0.3rem;
  }

  img {
    width: 9rem;
    height: 9rem;
  }

  h3 {
    font-weight: 700;
    font-size: 0.9rem;
  }

  span {
    font-size: 0.6rem;
    font-weight: 700;
    color: #828282;
  }

  p,
  .priceProduct {
    font-size: 0.8rem;
    font-weight: 700;
    color: #27ae60;
  }

  button {
    width: 4rem;
    height: 2rem;
    font-size: 0.7rem;
    font-weight: 700;
  }

  @media screen and (min-width: 900px) {
    gap: 0.9rem;
    display: flex;
    flex-wrap: wrap;
  }
`;
