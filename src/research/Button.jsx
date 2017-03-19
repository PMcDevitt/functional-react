import React from 'react'
export default class Button extends React.Component{
  constructor (props){
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(){
    console.log('Before State Update')
    this.setState(
      {clicked: true},
      console.log('State updated')
    )
  }
  render(){
    return <button onClick={() => this.handleClick()}>{this.props.text}</button>
  }
}

Button.propTypes = {
  text: React.PropTypes.string
}

Button.defaultProps = {
  text: 'Click Me'
}