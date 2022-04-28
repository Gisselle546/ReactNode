import React from 'react';
import { Header, HomeWrapper, Button } from '../styles/home.style';
import { useStore } from '../context/getToken';
import Box from '../components/Box/Box';
import { generateTokenUrl } from '../utils/contants';


const Home = () => {

const {state,addToken} = useStore();
   
  return (
    
    <HomeWrapper>
        
        <Box>
        <Header>Generated Token</Header>
          {state.token}
          <Button onClick={()=>addToken(generateTokenUrl)}>Generate Another</Button>
          </Box>
         
    </HomeWrapper>
    
  )
}

export default Home;