import React from 'react'
import styled from 'styled-components'


const Box = (props) => {
  
  const Wrapper = styled.div`
  width: ${props => props.$width || "300px"};
  height: ${props => props.$height || "300px"};
  border: 1px solid #eee;
  border-radius: 1rem;
`

  return (
    <Wrapper>
      box
    </Wrapper>
  )
}



export default Box
