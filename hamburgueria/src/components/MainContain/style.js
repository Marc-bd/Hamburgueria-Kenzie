import styled from "styled-components";

export const MainContain = styled.main`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-left: 1rem;

  @media screen and (min-width: 900px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;

    .containerAll {
      width: 33rem;
      height: 33rem;
    }
  }

  @media screen and (min-width: 1100px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;

    .containerAll {
      width: 49rem;
      height: 50rem;
    }
  }
`;
