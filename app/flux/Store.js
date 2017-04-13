/* global Promise */

import EventEmitter from 'events'

import Api from 'flux/Api'
import Constants from 'flux/Constants'
import AppDispatcher from 'flux/Dispatcher'

var _infos = {}
var _posts = {}

class Store extends EventEmitter {

    loadAssets () {
        const promises = [Api.fetchSiteInfos(), Api.fetchAllPosts()]

        Promise.all(promises).then(response => {
            _infos = response[0]
            _posts = response[1]

            this.emitChange()
        })
    }

    getInfos () {
        return _infos
    }

    getPosts () {
        return _posts
    }

    getPostBySlug (slug) {
        return _posts.find((post) => {
            return post.slug === slug
        })
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
