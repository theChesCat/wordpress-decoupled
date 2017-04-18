import EventEmitter from 'events'

import Constants from 'flux/Constants'
import AppDispatcher from 'flux/Dispatcher'

var _infos = {}
var _posts = {}

class Store extends EventEmitter {

    setInfos (data) {
        _infos = Object.assign({}, data)
    }

    getInfos () {
        return _infos
    }

    setPosts (data) {
        _posts = data.slice()
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

store.dispatcherIndex = AppDispatcher.register(function (action) {
    switch (action.actionType) {
    case Constants.RECEIVE_CONTENT :
        store.setInfos(action.data.infos)
        store.setPosts(action.data.posts)
        store.emitChange()
    }

    return true
})

export default store
