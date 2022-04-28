import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { TrackWrapper, Header, SubHeader } from '../styles/track.style';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '../components/Box/Box';
import {getUrl} from '../utils/contants';
import ResultBox from '../components/ResultBox/ResultBox';
import { SmallHeader } from '../components/Box/Box.style';
import CircularProgress from '@mui/material/CircularProgress';


const Track = () => {

const [tracking, setTracking] = useState<any>()

console.log(tracking);

 const token = process.env.REACT_APP_TOKEN;
async function calling() {
    const res = await axios.get(`${getUrl}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
        
      });
      
     setTracking(res.data);
}    
    useEffect(()=>{
        calling();
    },[])

    if(!tracking) {
     return(
       <div>
         <CircularProgress/>
       </div>
     )
    }

  return (
    <TrackWrapper>
      <Box>
         <Header>BPS Tracking</Header> 
         <SubHeader>Enter your tracking number</SubHeader>
         <TextField  label ="" InputProps={{ inputProps: {style: { textAlign: "center" }, }}}id="standard-basic"  variant="standard"  style={{ width: '90%', marginLeft:'30px', marginBottom:'4rem' }}  value={tracking.label.tracking_number} />
        
         <Button variant="outlined"  style={{width:'10%', margin:' 0 auto', marginBottom:"1rem", borderRadius:"7px", }}>Search</Button>
         <Button variant="outlined" style={{width:'80%', margin:' 0 auto', marginBottom:'1rem'}}>Show Map</Button>
        
      </Box>  
      <ResultBox>
        <SubHeader style={{color:'green'}}>{tracking.status.toUpperCase()}</SubHeader>
        <SmallHeader>Please contact us if you have any doubts</SmallHeader>
        <Button variant="outlined"  style={{width:'10%', margin:' 0 auto', borderRadius:"7px" }}>Search</Button>
      </ResultBox>
    </TrackWrapper>
  )
}

export default Track;