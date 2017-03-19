import React from 'react'

const withClassName = Component => props => (
  <Component {...props} className='my-class'/>
)

const MyComponent =({ className })=>(
  <div className={className}></div>
)
MyComponent.propTypes    = {
  className: React.PropTypes.string
}

const MyComponentWithClassName = withClassName(MyComponent)

console.log(MyComponentWithClassName)



