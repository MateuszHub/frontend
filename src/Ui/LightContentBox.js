import React, { Children } from 'react';
import styles from './LightContentBox.module.scss';

class LightContentBox extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
                <div className={styles.content}>
                    {this.props.children}
                </div>
        )
    }
}


export default LightContentBox;