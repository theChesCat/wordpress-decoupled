/* global document */

import React from 'react'
import ReactDOM from 'react-dom'

import Actions from 'flux/Actions'
import Store from 'flux/Store'
import Loader from 'components/loader'
import App from 'components/app'
import 'global.css'

export default class Index extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            loadingDone: false,
            posts: []
        }

        this.onAssetsLoaded = this.onAssetsLoaded.bind(this)
    }

    componentWillMount () {
        Store.addChangeListener(this.onAssetsLoaded)
        Actions.fetchContent()
    }

    componentWillUnmount () {
        Store.removeChangeListener(this.onAssetsLoaded)
    }

    render () {
        if (this.state.loadingDone) {
            // If Wordpress data is loaded, rendering the App
            return (
                <App />
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
            loadingDone: true
        })
    }

}

ReactDOM.render(<Index />, document.getElementById('app'))
