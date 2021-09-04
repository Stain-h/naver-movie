import React from 'react'
import styled from 'styled-components'

const Footer = ({ className }) => {
  return (
    <Wrapper className={ className }>
      {/* Footer */}
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width:100%;
  height:60px;
`

export default Footer
