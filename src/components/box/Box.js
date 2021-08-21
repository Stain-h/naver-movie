import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Box = ({ width, height,title }) => {
  return (
    <Wrapper width={width} height={height}>
      <strong className="tit_box">{title}</strong>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: ${props => props.width || "300px"};
  height: ${props => props.height || "300px"};
  padding: 1rem;
  border: 1px solid #eee;
  border-radius: 1rem;
`

Box.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string
};


export default Box
