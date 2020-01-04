import React from 'react';
import styles from './LightContentBox.module.scss';

class LightContentBox extends React.Component {
    render() {
        return (
                <div className={styles.content}>
                    {this.props.children}
                </div>
        )
    }
}


export default LightContentBox;