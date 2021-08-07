import React from 'react'
import './SearchBar.scss'

const SearchBar = (props) => {
  return (
    <div className="box_inp">
      <form className="wrap_search">
        <label htmlFor="inpSearch" className="screen_out">검색어 입력</label>
        <input type="text" id="inpSearch" placeholder={props.placeHolder}></input>
      </form>
    </div>
  )
}

export default SearchBar
