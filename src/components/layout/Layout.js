import React from 'react'
import Header from './Header'
import Footer from './Footer'
import styled from 'styled-components'

const Layout = props => {
  const { children, match, location, history } = props;
  return (
    <Container>
        <Header></Header>
        <Main>{ children }</Main>
        <Footer></Footer>
    </Container>
  )
}

const Container = styled.div`
  height:100%;
`
const Main = styled.main`
  height:100%;
`

export default Layout
