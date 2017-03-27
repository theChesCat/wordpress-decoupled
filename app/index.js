/* global document */

import React from 'react'
import ReactDOM from 'react-dom'

import Actions from './flux/Actions'
import Store from './flux/Store'
import Loader from './components/loader'
import Base from './components/base'
import './global.css'

class Index {

    init () {
        Store.addChangeListener(this.onAssetsLoaded)
        Actions.loadAssets()
        this.displayLoading()
    }

    displayLoading () {
        ReactDOM.render(<Loader />, document.getElementById('loader'))
    }

    onAssetsLoaded () {
        document.getElementById('loader').remove()
        const articles = Store.getArticles()
        ReactDOM.render(<Base articles={articles} />, document.getElementById('app'))
    }
}

const index = new Index()
index.init()
export default index
