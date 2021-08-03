import React from 'react'
import Button from '../components/Button';

const ButtonGuide = () => {
  return (
    <div>
      <div className="buttons">
          <Button size="large" onClick={() => console.log('클릭됐다!')}>BUTTON</Button>
          <Button>BUTTON</Button>
          <Button size="small">BUTTON</Button>
        </div>
        <div className="buttons">
          <Button size="large" color="gray">BUTTON</Button>
          <Button color="gray">BUTTON</Button>
          <Button size="small" color="gray">BUTTON</Button>
        </div>
        <div className="buttons">
          <Button size="large" color="pink">BUTTON</Button>
          <Button color="pink">BUTTON</Button>
          <Button size="small" color="pink">BUTTON</Button>
        </div>
        <div className="buttons">
          <Button size="large" color="blue" outline>BUTTON</Button>
          <Button color="gray" outline>BUTTON</Button>
          <Button size="small" color="pink" outline>BUTTON</Button>
        </div>
        <div className="buttons">
          <Button size="large" color="blue" fullWidth>BUTTON</Button>
          <Button color="gray" fullWidth>BUTTON</Button>
          <Button size="small" color="pink" fullWidth>BUTTON</Button>
        </div>
    </div>
  )
}

export default ButtonGuide