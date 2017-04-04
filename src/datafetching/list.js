import React from 'react'
import withData from './with-data'

const List = ({ data: gists }) => (
  <div>
    <p>Folder - datafetching</p>
    <ul>
      {gists.map(gist => (
        <li key={gist.id}>{gist.description}</li>
      ))}
    </ul>
  </div>
)

List.propTypes = {
  data: React.PropTypes.array
}

const withGists = withData(props => `https://api.github.com/users/${props.username}/gists`)

export default withGists(List)
