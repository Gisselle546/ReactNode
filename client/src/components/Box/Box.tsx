import React from 'react'
import { BoxWrapper } from './Box.style';

const Box = (props:any) => {
  return (
    <BoxWrapper>{props.children}</BoxWrapper>
  )
}

export default Box;