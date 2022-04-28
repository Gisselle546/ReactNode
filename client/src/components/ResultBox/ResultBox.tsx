import React from 'react'
import { ResultBoxWrapper } from './ResultBox.style';

const ResultBox = (props:any) => {
  return (
    <ResultBoxWrapper>{props.children}</ResultBoxWrapper>
  )
}

export default ResultBox;