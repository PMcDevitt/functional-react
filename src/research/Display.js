import React, {PropTypes} from 'react'
const Display = ({ counter }) => <h1>{ counter }</h1>

Display.propTypes ={
  counter: PropTypes.number.isRequired
}

export default Display