import styled from "styled-components";

export const ItemContainer = styled.div`
  width: 80%;

  h3 {
    font-size: 32px;
    color: #fff;
    margin-bottom: 5px;
  }

  p {
    font-size: 16px;
    color: #b3b3b3;
    margin-bottom: 10px;
  }

  a {
    font-size: 16px;
    color: #32cd32;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  a.remover {
    color: red;
    margin-top: 20px;
  }

  hr {
    margin: 20px 0;
    color: #b3b3b3;
  }
`;
