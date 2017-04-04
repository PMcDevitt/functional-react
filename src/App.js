import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import ListGist from './react-refetch/list.js'
import List from './datafetching/list.js'
import Counter from './research/Counter.jsx'
import Test from './research/MyComponent.jsx'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to React</h2>
        </div>
        <p className='App-intro'>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div><Test /></div>
        <div>
          <Counter />
        </div>
        <h1>Standard List</h1>
        <div>
          <List username='gaearon' />
        </div>
        <h1>Gist List</h1>
        <div>
          <ListGist username='gaearon' />
        </div>
      </div>
    )
  }
}

const ButtonNew1 = ({ text }) => <button>{ text }</button>

ButtonNew1.propTypes = {
  text: React.PropTypes.string
}

export default App
