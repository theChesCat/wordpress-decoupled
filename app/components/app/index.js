import React from 'react'
import styles from './index.css'

import Header from './header'
import Navigation from './navigation'
import Views from './views'

export default class App extends React.Component {

    render () {
        return (
            <div className={styles.base}>
                <Header />
                <Views articles={this.props.articles} />
                <Navigation />
            </div>
        )
    }
}

App.propTypes = {
    articles: React.PropTypes.array
}
