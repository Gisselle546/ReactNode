import React from 'react'
import logo from '../../assets/logo/randomlogo.png';
import styled from 'styled-components';
import { FaSignInAlt } from 'react-icons/fa';
import { NavbarWrapper, LeftContainer,RightContainer,ListItems, ListItem,SigninIconContainer } from './Navbar.style';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
    text-decoration: none;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

const Navbar = () => {
  return (
    <NavbarWrapper>
       <LeftContainer>
         <img src={logo} width="100%" height="100%" alt="randomLogo"/>
         <ListItems>
         <StyledLink to="/"><ListItem>Generate Token</ListItem></StyledLink>  
         <StyledLink to="/track"><ListItem>Tracking</ListItem></StyledLink>
         </ListItems>
        </ LeftContainer>
       <RightContainer>
      <SigninIconContainer>
       <FaSignInAlt style={{marginRight:"4px"}} size={22}/>
       Sign in
       </SigninIconContainer> 
       </RightContainer>
    </NavbarWrapper>
  )
}

export default Navbar;