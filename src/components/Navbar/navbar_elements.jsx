import { BsSearch } from 'react-icons/bs';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: #F2EBE9;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 10000px) / 2);
  z-index: 10;
`;

export const SearchBtn = styled(BsSearch)`
  width: 20px;
  height: 20px;
  margin-left: 75vw;
  margin-top: 20px;
  cursor: pointer;
  color: #243A73;
  &:hover{
    color: #7C3E66;
  }
`;

export const NavLink = styled(Link)`
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    color: #7C3E66;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  text-align: center;
  margin-right: 24px;
  height: 50px;
  width: 50px;
  background-color: #243A73;
  border-radius: 50%;
  cursor: pointer;

  h1{
    margin-left: 18px;
    text-transform: uppercase;
  color: #A5BECC;
  }
  &:hover{
    background-color: #7C3E66;
    h1{
    color: #fff;
    }
  }
`;



export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #7C3E66;
  padding: 5px 12px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  margin-left: 24px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;