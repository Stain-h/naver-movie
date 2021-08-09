import React from 'react'
import PropTyeps from 'prop-types'
import './SearchBar.scss'

const SearchBar = ({ placeHolder }) => {
  return (
    <div className="box_inp">
      <form className="wrap_search">
        <label htmlFor="inpSearch" className="screen_out">검색어 입력</label>
        <input type="text" id="inpSearch" placeholder={placeHolder}></input>
      </form>
    </div>
  )
}

SearchBar.propTypes = {
  placeHolder: PropTyeps.string
}

export default SearchBar
