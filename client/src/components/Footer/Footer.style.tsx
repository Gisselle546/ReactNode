import styled from "styled-components";

export const FooterWrapper = styled.div`
display:flex;
justify-content:space-evenly;
align-items:center;
padding:1rem;
background-color:#4b36e7;
height:20vh;

`;

export const Container = styled.div`
height:65%
border:2px solid white;

`

export const FooterLinks = styled.div`
display:flex;
justify-content:space-between;
`

export const FooterLinkItems = styled.ul`

list-style-type:none;
height:10rem;

`;

export const FooterLinkItem = styled.li`
color: #fff;
font-weight:bold;
padding:1rem;
cursor:pointer;
font-size:15px;
&:hover {
  color: #000;
}
`;