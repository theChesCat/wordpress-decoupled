import React from 'react'
import { Link } from 'react-router-dom'

import styles from 'components/app/header/index.css'

export default class Header extends React.Component {

    render () {
        return (
            <div className={styles.header}>
                <Link to='/' className={styles.title}>{this.props.name}</Link>
                <div className={styles.description}>{this.props.description}</div>
            </div>
        )
    }

}

Header.propTypes = {
    name: React.PropTypes.string,
    description: React.PropTypes.string
}
