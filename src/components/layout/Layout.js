import React from 'react'
import Header from './Header'
import Footer from './Footer'
import styled from 'styled-components'

const Layout = props => {
  const { children } = props;
  return (
    <Container>
        <Header></Header>
        <Main>{ children }</Main>
        <Footer></Footer>
    </Container>
  )
}

const Container = styled.div`
  position:relative;
  height:100%;
  background-color: #f7f7f7;
`
const Main = styled.main`
  position:relative;
  height:100%;
`

export default Layout
