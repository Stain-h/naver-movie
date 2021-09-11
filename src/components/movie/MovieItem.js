import React from 'react'
import './movie.scss'
import PropTypes from 'prop-types'

const MovieItem = ({ title, subtitle, image, link, userRating, pubDate, director }) => {
  // actor: movie.actor 
  // director: movie.director
  // image: movie.image 
  // link: movie.link
  // pubDate: movie.pubDate
  // subtitle: movie.subtitle
  // title: movie.title

  return (
    <div className="box_movie">
      <a href={link} className="link_movie">
          { image && <img src={image} width={116} height={166} />
            || <img src="http://placehold.it/116x166" /> 
          }
      </a>
      <div className="wrap_info">
        <h2>{title.replace(/<b>/gi, "").replace(/<\/b>/gi, "").replace(/&amp;/gi,"&")}</h2>
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
