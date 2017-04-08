import React from 'react'
import styles from './index.css'

export default class Post extends React.Component {
    render () {
        const post = this.props.post

        return (
            <div className={styles.post} onClick={this.onClick.bind(this)}>
                <img src={post.thumbnail} className={styles.image} />
                <div className={styles.text}>
                    <div className={styles.title}>{post.title}</div>
                </div>
            </div>
        )
    }

    onClick () {
        this.props.onPostClick(this.props.post.id)
    }
}

Post.propTypes = {
    post: React.PropTypes.object,
    onPostClick: React.PropTypes.func
}
