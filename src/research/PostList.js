import React from 'react'
import Posts, {fetch} from 'isomorphic-fetch'

class PostList extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      posts: []
    }
  }
  componentDidMount() {
    Posts.fetch().then(posts => {
      this.setState({posts})
    })
  }
}