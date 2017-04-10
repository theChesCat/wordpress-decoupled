import React from 'react'
import Store from './../../../../flux/Store'
import Post from './Post.js'

export default class PostContainer extends React.Component {

    render () {
        const slug = this.props.match.params.postSlug
        const post =  Store.getPostBySlug(slug)

        return (
            <Post post={post} />
        )
    }

}

PostContainer.propTypes = {
    match: React.PropTypes.object
}
