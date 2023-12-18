import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const LinkBtnBack = styled(Link)`
  width: 120px;
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  height: 10px;
  padding: 10px 12px;
  align-items: center;
  gap: 10px;
  text-decoration: none;

  background-color: inherit;
  color: #000000;
  border-radius: 20px;
  border: 1px solid #acacac;

  &:hover,
  &:focus,
  &:active {
    transition: all 250ms ease-in-out;
    color: #000;
    box-shadow: 2px 2px 5px 0px #cecece, 2px 2px 5px 0px #cecece;
  }
`;

export const MovieItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 10px;
  color: #000;
  margin-top: 20px;
  margin-bottom: 20px;
  ul {
    display: flex;
    gap: 10px;
  }
`;

export const GenresItem = styled.li`
  list-style: none;
`;
