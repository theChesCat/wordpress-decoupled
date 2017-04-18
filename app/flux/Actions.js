import Constants from 'flux/Constants'
import Dispatcher from 'flux/Dispatcher'
import Api from 'flux/Api'

class Actions {

    fetchContent () {
        Dispatcher.dispatch({
            actionType: Constants.FETCH_CONTENT
        })

        Api.fetchContent()
    }

    receiveContent (content) {
        Dispatcher.dispatch({
            actionType: Constants.RECEIVE_CONTENT,
            data: content
        })
    }

}

const instance = new Actions()
export default instance
