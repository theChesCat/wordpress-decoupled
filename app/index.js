/* global document */

import React from 'react'
import ReactDOM from 'react-dom'

import Actions from './flux/Actions'
import Store from './flux/Store'
import Loader from './components/loader'
import App from './components/app'
import './global.css'

export default class Index extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            loadingDone: false,
            posts: []
        }
    }

    componentWillMount () {
        Store.addChangeListener(this.onAssetsLoaded.bind(this))
        Actions.loadAssets()
    }

    componentWillUnmount () {
        Store.removeChangeListener(this.onAssetsLoaded.bind(this))
    }

    render () {
        if (this.state.loadingDone) {
            // If Wordpress data is loaded, rendering the App
            return (
                <App posts={this.state.posts} />
            )
        } else {
            // If not, rendering the loader
            return (
                <Loader />
            )
        }
    }

    onAssetsLoaded () {
        this.setState({
            loadingDone: true,
            posts: Store.getPosts()
        })
    }

}

ReactDOM.render(<Index />, document.getElementById('app'))
