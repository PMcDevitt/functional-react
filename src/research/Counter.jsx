import React, {Component} from 'react'
import Buttons from './Buttons.js'
import Display from './Display.js'

export default class Counter extends Component {
  constructor (props){
    super(props)
    this.state = {
      counter: 0
    }
    this.handleDecrement = this.handleDecrement.bind(this)
    this.handleIncrement = this.handleIncrement.bind(this)
  }

  handleDecrement(){
    this.setState({
      counter: this.state.counter - 1
    })
  }

  handleIncrement(){
    this.setState({
      counter: this.state.counter + 1
    })
  }

  render(){
    return(
      <div>
        <Display counter={this.state.counter} />
        <Buttons
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </div>
    )
  }
}