import styled from 'styled-components';

const ButtonCheckout = styled.button`
  display: block;
  margin: 0 auto;
  height: 65px;
  font-style: inherit;
  font-family: inherit;
  background-color: black;
  color: white;
  border-color: transparent;
  cursor: pointer;
  transition-property: color, background-color, border-color;
  transition-duration: 1s;
  border-radius: 50px;
  &:hover{
    background-color: #ffff;
    color: black;
    border-color: black;
  }
  &:disabled{
    background-color: #ccc;
    color: #c1c1c1;
    border-color: black;
  }

`;

export default ButtonCheckout;