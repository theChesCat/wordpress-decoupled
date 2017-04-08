import React from 'react'
import styles from './index.css'

import Post from './post'

export default class Showcase extends React.Component {
    render () {
        const posts = this.props.posts

        return (
            <div className={styles.showcase}>
                {
                    posts.map((post, id) => {
                        return <Post key={id} post={post} onPostClick={this.props.onPostClick} />
                    })
                }
            </div>
        )
    }
}

Showcase.propTypes = {
    posts: React.PropTypes.array,
    onPostClick: React.PropTypes.func
}
