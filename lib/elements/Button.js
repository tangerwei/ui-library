import styled from 'styled-components';

// <h1>(.+?)<\/h1>
// const a = <h1>1000</h1>;

const Button = styled.button`
  background: #1FB6FF;
  border: none;
  border-radius: 2px;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  font-size: 16px;
  line-height: 40px;
  font-weight: 200;
  margin: 8px 0;
  outline: none;
  padding: 0 12px;
  text-transform: all 300ms ease;
  &:hover {
    background: #009EEB;
  }
}`;

export default Button;
