import React from 'react'
import logo from '../../assets/logo/randomlogo.png';
import { FooterWrapper, Container, FooterLinks, FooterLinkItem,FooterLinkItems } from './Footer.style';

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <img src={logo} width="150px" height="150px" alt="randomLogo"/>
      </Container>
     <FooterLinks>
   
        <FooterLinkItems>
          <FooterLinkItem>Lorem ipsum dolor </FooterLinkItem>
          <FooterLinkItem>sit amet, consectetur adipiscing elit</FooterLinkItem>
          <FooterLinkItem>consectetur adipiscing elit</FooterLinkItem>
        </FooterLinkItems>
       
       
          <FooterLinkItems>
            <FooterLinkItem>Excepteur sint occaecat</FooterLinkItem>
            <FooterLinkItem>upidatat non proident, sunt in</FooterLinkItem>
            <FooterLinkItem>culpa qui officia deserunt</FooterLinkItem>
          </FooterLinkItems>
      
      
     </FooterLinks>
    </FooterWrapper>
  )
}

export default Footer;