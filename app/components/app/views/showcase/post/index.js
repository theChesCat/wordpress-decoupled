import React from 'react'
import { Link } from 'react-router-dom'

import styles from './index.css'

export default class Post extends React.Component {

    render () {
        const post = this.props.post

        return (
            <Link to={`/posts/${post.slug}`}>
                <div className={styles.post}>
                    <img src={post.thumbnail} className={styles.image} />
                    <div className={styles.text}>
                        <div className={styles.title}>{post.title}</div>
                    </div>
                </div>
            </Link>
        )
    }

}

Post.propTypes = {
    post: React.PropTypes.object
}
