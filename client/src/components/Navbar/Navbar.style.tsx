import styled from "styled-components";

export const NavbarWrapper = styled.div`
display:flex;
justify-content:space-evenly;
align-items:center;
height:6rem;
background-color:rgb(115,118,120);
`;

export const LeftContainer = styled.div`
display:flex;
height:80%;
justify-content:space-between;


`;

export const ListItems = styled.ul`
display:flex;
justify-content:space-between;
text-decoration:none;
align-items:center;
min-width:60%;
list-style-type:none;
margin:1rem;
`;

export const ListItem = styled.li`
color: #fff;
font-weight:bold;
text-decoration:none;
cursor:pointer;
font-size:15px;
&:hover {
  color: #000;
}

`;


export const RightContainer = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
height:70%;
`;

export const SigninIconContainer = styled.div`
display:flex;
justify-content:center;
color: #fff;
cursor:pointer;
&:hover {
  color: #000;
}
`;

export const Button = styled.button`
  background-color: #000;
  border-radius:7px;
  height:30px;
  width:100px;
  border: none;
  color: white;
  cursor:pointer;
`
