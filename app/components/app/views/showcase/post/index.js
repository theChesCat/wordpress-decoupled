import React from 'react'
import striptags from 'striptags'
import { Link } from 'react-router-dom'

import styles from 'components/app/views/showcase/post/index.css'

export default class Post extends React.Component {

    render () {
        const post = this.props.post

        return (
            <Link to={`/posts/${post.slug}`} className={styles.post}>
                <img src={post.thumbnail} className={styles.image} />
                <div className={styles.text}>
                    <div className={styles.title}>{post.title}</div>
                    <div className={styles.excerpt}>{striptags(post.excerpt)}</div>
                </div>
            </Link>
        )
    }

}

Post.propTypes = {
    post: React.PropTypes.object
}
