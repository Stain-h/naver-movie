import React from 'react'
import Header from './Header'
import Footer from './Footer'
import styled from 'styled-components'

const Layout = props => {
  const { children, match, location, history } = props;

  return (
    <>
      <Header className="br-header"></Header>
      <Container className="br-main">{ children }</Container>
      <Footer className="br-footer"></Footer>
    </>
  )
}

const Container = styled.main`
  height:100%;
`

export default Layout
