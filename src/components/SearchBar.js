import React from 'react'
import PropTypes from 'prop-types'
import './SearchBar.scss'

const SearchBar = ({ placeHolder, onUserInput, keyword}) => {

  const onChange = (e) => {
    onUserInput(e.target.value)
  }

  return (
    <div className="box_inp">
      <form className="form_sch">
        <label htmlFor="inpSearch" className="screen_out">검색어 입력</label>
        <input type="text" id="inpSearch" placeholder={placeHolder} value={keyword} onChange={onChange}></input>
      </form>
    </div>
  )
}

SearchBar.propTypes = {
  placeHolder: PropTypes.string,
  keyword: PropTypes.string
}

export default SearchBar
