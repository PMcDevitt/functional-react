import React from 'react'
const ButtonNew = ({ text }) => <button>{ text }</button>

ButtonNew.propTypes = {
  text: React.PropTypes.string
}

const Profile = ({user}) => (
  <div>{user.name} {user.surname}</div>
)

Profile.propTypes = {
  user: React.PropTypes.shape({
    name: React.PropTypes.string.isRequired,
    surname: React.PropTypes.string,
    age: (props, propName) => {
      if (!(props[propName] > 0 && props[propName] < 100)) {
        return new Error(`${propName} must be between 1 and 99`)
      }
      return null
    }
  })
}
module.exports = {ButtonNew, Profile}
