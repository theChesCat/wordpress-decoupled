import React from 'react'

import Store from 'flux/Store'
import Showcase from 'components/app/views/showcase/Showcase'

export default class ShowcaseComponent extends React.Component {
    render () {
        const posts = Store.getPosts()

        return (
            <Showcase posts={posts} />
        )
    }
}
