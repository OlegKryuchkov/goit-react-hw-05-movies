import { styled } from 'styled-components';

export const Header = styled.header`
  padding: 20px;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  background-color: #dadada;
  a {
    text-decoration: none;
  }

  nav {
    display: flex;
    gap: 20px;
  }
  nav > a {
    color: #2f2f2f;
    text-decoration: none;

    font-weight: 400;
    font-size: 16px;
    &:hover,
    &:focus,
    &:active {
      color: #0086bb;
      transition: all 250ms ease-in-out;
    }
  }

  span {
    font-weight: 600;
    font-size: 20px;
    color: #2f2f2f;
    cursor: pointer;

    &:hover,
    &:focus,
    &:active {
      color: #0086bb;
      transition: all 250ms ease-in-out;
    }
  }
`;

export const Section = styled.section`
  padding-top: 20px;
`;

export const Container = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; */
  padding: 0px 20px;
  margin-left: auto;
  margin-right: auto;
  max-width: 1440px;
  overflow: hidden;

  h1 {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    color: #2f2f2f;
    font-size: 28px;
  }
`;

export const MoviesWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;
