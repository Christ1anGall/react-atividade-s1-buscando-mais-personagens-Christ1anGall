import styled from "styled-components";

const Container = styled.div`
  margin: 15px;
  padding: 0 1rem 0.5rem 1rem;
  border: 1px solid black 0.5;
  color: rgb;
  :hover {
    box-shadow: 0 0 10px 5px;
    transform: translateY(-5px);
    transition: 0.9s;
  }
  background-color: ${({ characterList }) => {
    return characterList.status === "Alive" ? "#f1f7ff" : "#f8ccce";
  }};

  h2 {
    margin: 10px 0;
    font-size: 1.5rem;
    color: ${({ characterList }) => {
      return characterList.status === "Alive" ? " #7bb8c9" : "#aa5e61";
    }};
  }
  img {
    height: 200px;
    width: 200px;
  }
`;

export default Container;
