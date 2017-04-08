import React from 'react'
import styles from './index.css'

export default class Post extends React.Component {
    render () {
        const post = this.props.post

        return (
            <div className={styles.post}>
                <div className={styles.title}>{post.title}</div>
            </div>
        )
    }
}

Post.propTypes = {
    post: React.PropTypes.object
}
