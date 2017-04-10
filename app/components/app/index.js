import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Header from 'components/app/header'
import Showcase from 'components/app/views/showcase'
import PostContainer from 'components/app/views/post'

import styles from 'components/app/index.css'

export default class App extends React.Component {

    render () {
        return (
            <Router>
                <div className={styles.base}>
                    <Header />
                    <div className={styles.views}>
                        <Route exact path="/" component={Showcase} />
                        <Route path="/posts/:postSlug" component={PostContainer} />
                    </div>
                </div>
            </Router>
        )
    }
}
