import React from 'react'

const withClassName = Component => props => (
  <Component {...props} className='my-class' />
)

const MyComponent = ({ className }) => (
  <div className={className} >
    This has the class name {className}
  </div>
)

MyComponent.propTypes = {
  className: React.PropTypes.string
}

const MyComponentWithClassName = withClassName(MyComponent)

export default MyComponentWithClassName
