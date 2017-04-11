import React from 'react'
import styles from 'components/app/views/post/index.css'

export default class Post extends React.Component {

    render () {
        const post = this.props.post

        return (
            <div className={styles.post}>
                <div className={styles.article}>
                    <div className={styles.title}>{post.title}</div>
                </div>
            </div>
        )
    }

}

Post.propTypes = {
    post: React.PropTypes.object
}
