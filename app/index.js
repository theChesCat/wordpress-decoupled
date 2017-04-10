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
