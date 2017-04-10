import React from 'react'
import styles from 'components/loader/index.css'

export default class Base extends React.Component {

    render () {
        return (
            <div className={styles.loadingPage}>
                <div className={styles.loader}></div>
            </div>
        )
    }
}
