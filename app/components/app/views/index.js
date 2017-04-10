import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Showcase from './showcase'
import PostContainer from './post'
import styles from './index.css'

export default class Views extends React.Component {

    render () {
        const posts = this.props.posts

        return (
            <Router>
                <div className={styles.views}>
                    <Route exact path="/" component={() => (<Showcase posts={posts} />)} />
                    <Route path="/posts/:postSlug" component={PostContainer} />
                </div>
            </Router>
        )
    }

}

Views.propTypes = {
    posts: React.PropTypes.array
}
