import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import './movie.scss'

const MovieItem = ({ movies, isLoading }) => {

  const replaceTitle = (string) => {
    return string.replace(/<b>/gi, "").replace(/<\/b>/gi, "")
                          .replace(/&amp;/gi,"&").replace(/&lt;/gi, "<").replace(/&gt;/gi, ">")
  } 

  return (
    isLoading 
        ?  <Loading>Loading...</Loading>
        : movies.map((movie,idx) => 
          <div className="box_movie" key={idx}>
            <a href={movie.link} className="link_movie">
                { movie.image && <img src={movie.image} width={116} height={166} />
                  || <img src="http://placehold.it/116x166" /> 
                }
            </a>
            <div className="wrap_info">
              <h2>{replaceTitle(movie.title)}</h2>
              <p>{movie.subtitle}</p>
              <span>{movie.userRating}</span>
            </div>
          </div>
        )
      
  )
}

MovieItem.propTypes = {
  movies : PropTypes.array.isRequired
}

const Loading = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`

export default MovieItem
