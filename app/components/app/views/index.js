import React from 'react'
import styles from './index.css'

import Showcase from './showcase'
import Article from './article'

export default class Views extends React.Component {

    constructor (props) {
        super(props)
        this.state = { viewName: 'showcase' } // Todo: put this in a constant
    }

    render () {
        return (
            <div className={styles.views}>
                { this.displayView() }
            </div>
        )
    }

    displayView () {
        const viewName = this.state.viewName
        const articles = this.props.articles

        if (viewName === 'showcase') {
            return ( <Showcase articles={articles} onArticleClick={this.onArticleClick.bind(this)} /> )
        } else if (viewName === 'article') {
            const article = this.getArticleFromId(this.state.articleId)
            return ( <Article article={article} /> )
        }
    }

    getArticleFromId (id) {
        return this.articles.filter(article => {
            return article.id === id
        })
    }

    onArticleClick (articleId) {
        this.setState({
            viewName: 'article',
            articleId: articleId
        })
    }
}

Views.propTypes = {
    articles: React.PropTypes.array
}
