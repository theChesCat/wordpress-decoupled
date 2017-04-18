import Store from 'flux/Store'
import Actions from 'flux/Actions'
import Dispatcher from 'flux/Dispatcher'
import Constants from 'flux/Constants'

// Mocking data
const _mockedInfos = {}
const _mockedPosts = [
    { slug: 'slug_1' },
    { slug: 'test_slug' },
    { slug: 'a_test_slug' }
]

// Dispatching mocked data
const _dispatchReceiveContent = function () {
    Dispatcher.dispatch({
        actionType: Constants.RECEIVE_CONTENT,
        data: {
            infos: _mockedInfos,
            posts: _mockedPosts
        }
    })
}

describe ('Store', () => {

    it ('has existing functions', () => {
        expect(typeof Store.setInfos).toEqual('function')
        expect(typeof Store.getInfos).toEqual('function')
        expect(typeof Store.setPosts).toEqual('function')
        expect(typeof Store.getPosts).toEqual('function')
        expect(typeof Store.getPostBySlug).toEqual('function')
        expect(typeof Store.emitChange).toEqual('function')
        expect(typeof Store.addChangeListener).toEqual('function')
        expect(typeof Store.removeChangeListener).toEqual('function')
    })

    it ('listens for RECEIVE_CONTENT action', () => {
        _dispatchReceiveContent()

        expect(Store.getInfos()).toEqual(_mockedInfos)
        expect(Store.getPosts()).toEqual(_mockedPosts)
    })

    it ('works to set & get infos', () => {
        Store.setInfos(_mockedInfos)
        expect(typeof Store.getInfos()).toEqual('object')
    })

    it ('works to set & get posts', () => {
        Store.setPosts(_mockedPosts)
        expect(Array.isArray(Store.getPosts())).toEqual(true)
    })

    it ('works for getPostBySlug', () => {
        Store.setPosts(_mockedPosts)
        expect(typeof Store.getPostBySlug(_mockedPosts[0].slug)).toEqual('object')
        expect(Store.getPostBySlug(_mockedPosts[0].slug)).toEqual(_mockedPosts[0])
    })

    it ('should emit change if event is added, or not if event is removed', () => {
        let triggered = false
        const callback = function () {
            triggered = true
        }
        Store.addChangeListener(callback)
        _dispatchReceiveContent()

        expect(triggered).toEqual(true)

        triggered = false
        Store.removeChangeListener(callback)
        _dispatchReceiveContent()

        expect(triggered).toEqual(false)
    })
})
