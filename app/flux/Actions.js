import Constants from 'flux/Constants'
import Dispatcher from 'flux/Dispatcher'

class Actions {

    loadAssets() {
        Dispatcher.dispatch({
            actionType: Constants.LOAD_ASSETS
        })
    }

}

const instance = new Actions()
export default instance
