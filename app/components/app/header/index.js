import React from 'react'
import styles from './index.css'

export default class Header extends React.Component {
    render () {
        return (
            <div className={styles.header}>
                <div className={styles.title}>{this.props.name}</div>
                <div className={styles.description}>{this.props.description}</div>
            </div>
        )
    }
}

Header.propTypes = {
    name: React.PropTypes.string,
    description: React.PropTypes.string
}
