import Constants from './Constants'
import AppDispatcher from './AppDispatcher'

class Actions {

    loadAssets() {
        AppDispatcher.dispatch({
            actionType: Constants.LOAD_ASSETS
        })
    }

    fetchTags(text) {
        AppDispatcher.dispatch({
            actionType: Constants.FETCH_TAGS,
            text: text
        })
    }

    fetchPosts(text) {
        AppDispatcher.dispatch({
            actionType: Constants.FETCH_POSTS,
            text: text
        })
    }
}

const instance = new Actions()
export default instance
