import React from 'react'
import styles from './index.css'

import Showcase from './showcase'
import Post from './post'

export default class Views extends React.Component {

    constructor (props) {
        super(props)
        this.state = { viewName: 'showcase' } // Todo: put this in a constant
    }

    render () {
        return (
            <div className={styles.views}>
                { this.displayView() }
            </div>
        )
    }

    displayView () {
        const viewName = this.state.viewName
        const posts = this.props.posts

        if (viewName === 'showcase') {
            return ( <Showcase posts={posts} onPostClick={this.onPostClick.bind(this)} /> )
        } else if (viewName === 'post') {
            const post = this.getPostFromId(this.state.postId)
            return ( <Post post={post} /> )
        }
    }

    getPostFromId (id) {
        return this.posts.filter(post => {
            return post.id === id
        })
    }

    onPostClick (postId) {
        this.setState({
            viewName: 'post',
            postId: postId
        })
    }
}

Views.propTypes = {
    posts: React.PropTypes.array
}
