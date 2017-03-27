/* global console */

import React from 'react'
import styles from './index.css'

export default class Article extends React.Component {
    render () {
        const article = this.props.article
        console.log(article)

        return (
            <div className={styles.article}>
                <div className={styles.title}>{article.title}</div>
            </div>
        )
    }
}

Article.propTypes = {
    article: React.PropTypes.object
}
