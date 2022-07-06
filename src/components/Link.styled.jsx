import styled, { css } from 'styled-components';

const StyledLink = styled.a`
  font-size: 1rem;
  text-decoration: none;
  text-align: center;
  color: black;
  padding: 0.5rem;
  width: 50px;
  box-shadow: 0 0 5px black;
  border-radius: 5px;
  background-color: lightgray;
  &:hover {
    opacity: 0.5;
  }
  ${(props) =>
    props.secondary &&
    css`
      background-color: red;
      border-radius: 5px;
      padding: 0.5rem;
      color: wheat;
      margin-bottom: 15px;
    `}
`;

export default StyledLink;
