/* global Promise */

import EventEmitter from 'events'

import Api from './Api'
import Constants from './Constants'
import AppDispatcher from './AppDispatcher'

class Store extends EventEmitter {

    loadAssets () {
        const promises = [Api.fetchAllPosts(), Api.fetchAllTags()]

        Promise.all(promises).then(response => {
            this.articles = response[0]
            this.tags = response[1]

            this.emitChange()
        })
    }

    getArticles () {
        return this.articles
    }

    getTags () {
        return this.tags
    }

    isReady () {
        return this.articles && this.tags
    }

    emitChange () {
        this.emit(Constants.CHANGE_EVENT)
    }

    addChangeListener (callback) {
        this.on(Constants.CHANGE_EVENT, callback)
    }

    removeChangeListener (callback) {
        this.removeListener(Constants.CHANGE_EVENT, callback)
    }
}

const store = new Store()

store.dispatcherIndex = AppDispatcher.register(function(action) {
    switch (action.actionType) {
    case Constants.LOAD_ASSETS :
        store.loadAssets()
    }

    return true
})

export default store
