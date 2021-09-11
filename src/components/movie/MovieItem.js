import React from 'react'
import PropTypes from 'prop-types'
import './movie.scss'

const MovieItem = ({ title, subtitle, image, link, userRating, pubDate, director }) => {
  
  title = title.replace(/<b>/gi, "").replace(/<\/b>/gi, "").replace(/&amp;/gi,"&").replace(/&lt;/gi, "<").replace(/&gt;/gi, ">");

  return (
    <div className="box_movie">
      <a href={link} className="link_movie">
          { image && <img src={image} width={116} height={166} />
            || <img src="http://placehold.it/116x166" /> 
          }
      </a>
      <div className="wrap_info">
        <h2>{title}</h2>
        <p>{subtitle}</p>
        <span>{userRating}</span>
      </div>
    </div>
  )
}

MovieItem.propTypes = {
  title : PropTypes.string.isRequired,
  subtitle : PropTypes.string,
  image : PropTypes.string,
  link : PropTypes.string,
  userRating : PropTypes.string,
  pubDate : PropTypes.string,
  director : PropTypes.string,
}

export default MovieItem
