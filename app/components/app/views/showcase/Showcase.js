import React from 'react'
import Post from './post'

import styles from 'components/app/views/showcase/index.css'

export default class Showcase extends React.Component {
    render () {
        const posts = this.props.posts

        return (
            <div className={styles.showcase}>
                {
                    posts.map((post, id) => {
                        return <Post key={id} post={post} />
                    })
                }
            </div>
        )
    }
}

Showcase.propTypes = {
    posts: React.PropTypes.array
}
