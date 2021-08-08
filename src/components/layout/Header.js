import React from 'react'
import styled from 'styled-components'

const Header = ({ className }) => {
  return (
    <Wrapper className={ className }>
      Header
    </Wrapper>
  )
}

const Wrapper = styled.header`
  width:100%;
  height:60px;
  background: skyblue;
`

export default Header
