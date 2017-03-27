import React from 'react'
import styles from './index.css'

import Article from './article'

export default class Showcase extends React.Component {
    render () {
        const articles = this.props.articles

        return (
            <div className={styles.showcase}>
                {
                    articles.map((article, id) => {
                        return <Article key={id} article={article} onArticleClick={this.props.onArticleClick} />
                    })
                }
            </div>
        )
    }
}

Showcase.propTypes = {
    articles: React.PropTypes.array,
    onArticleClick: React.PropTypes.func
}
