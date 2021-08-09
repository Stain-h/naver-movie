import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Box = ({ width, height }) => {
  
  const Wrapper = styled.div`
  width: ${props => props.width || "300px"};
  height: ${props => props.height || "300px"};
  padding: 16px;
  border: 1px solid #eee;
  border-radius: 1rem;
`

  return (
    <Wrapper width={width} height={height}>
      box
    </Wrapper>
  )
}

Box.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string
};


export default Box
