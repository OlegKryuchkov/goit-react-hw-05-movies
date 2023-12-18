import { styled } from 'styled-components';

export const WrapperMovie = styled.div`
  display: flex;
  gap: 24px;
  font-size: 18px;
`;

export const WrapperMovieItem = styled.ul`
  list-style: none;
  display: flex;
  gap: 30px;

  li {
    /* display: flex; */
    /* flex-direction: column; */
    /* justify-content: center; */
    /* align-items: center; */
    font-size: 24px;
  }

  a {
    text-decoration: none;
    color: #2f2f2f;
    &:hover,
    &:focus,
    &:active {
      color: #0086bb;
      transition: all 250ms ease-in-out;
    }
  }
`;

export const Input = styled.input`
  color: #000;
  box-shadow: 2px 2px 5px 0px #cecece, 2px 2px 5px 0px #cecece;
  background: inherit;
  border-radius: 12px;
  padding-left: 10px;
  width: 250px;
  height: 20px;
`;
