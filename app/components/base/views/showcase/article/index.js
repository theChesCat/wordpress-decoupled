import React from 'react'
import styles from './index.css'

export default class Article extends React.Component {
    render () {
        const article = this.props.article

        return (
            <div className={styles.article} onClick={this.onClick.bind(this)}>
                <div className={styles.name}>{article.title}</div>
            </div>
        )
    }

    onClick () {
        this.props.onArticleClick(this.props.article.id)
    }
}

Article.propTypes = {
    article: React.PropTypes.object,
    onArticleClick: React.PropTypes.func
}
