import React from 'react'
import { connect } from 'react-refetch'
import Gist from './gist'

const List = ({ gists }) => (
  gists.fulfilled && (
    <div>
      <p>Folder - react-refetch</p>
      <ul>
        {gists.value.map(gist => (
          <Gist key={gist.id} {...gist} />
        ))}
      </ul>
    </div>
  )
)

List.propTypes = {
  gists: React.PropTypes.object
}
const connectWithGists = connect(({ username }) => ({
  gists: `https://api.github.com/users/${username}/gists`
}))
export default connectWithGists(List)
