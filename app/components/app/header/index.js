import React from 'react'

import Store from 'flux/Store'
import Header from 'components/app/header/Header'

export default class HeaderContainer extends React.Component {

    render () {
        const infos = Store.getInfos()

        return (
            <Header name={infos.name} description={infos.description} />
        )
    }

}

Header.propTypes = {
    name: React.PropTypes.string,
    description: React.PropTypes.string
}
