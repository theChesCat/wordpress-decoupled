import React from 'react'
import styles from './index.css'

import Header from './header'
import Navigation from './navigation'
import Views from './views'

export default class App extends React.Component {

    render () {
        const infos = this.props.infos
        const posts = this.props.posts

        return (
            <div className={styles.base}>
                <Header name={infos.name} description={infos.description} />
                <Views posts={posts} />
                <Navigation />
            </div>
        )
    }
}

App.propTypes = {
    infos: React.PropTypes.object,
    posts: React.PropTypes.array
}
