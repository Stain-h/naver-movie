import React from 'react'
import styled from 'styled-components'

const Footer = ({ className }) => {
  return (
    <Wrapper className={ className }>
      Footer
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  width:100%;
  height:60px;
  background-color: yellow;
`

export default Footer
