import React from 'react'
import { Box, SearchBar } from '../components'

const Home = () => {
  return (
    <div className="br-container">
      <main className="br-main">
        <SearchBar placeHolder="검색어를 입력하세요"></SearchBar>
        <Box $width="100px" $height="100px"></Box>
      </main>
    </div>
  )
}

export default Home
