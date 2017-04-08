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
                <Views posts={this.props.posts} />
                <Navigation />
            </div>
        )
    }
}

App.propTypes = {
    posts: React.PropTypes.array
}
