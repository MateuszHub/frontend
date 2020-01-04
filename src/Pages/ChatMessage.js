import React from 'react';
import styles from './ChatMessage.module.scss';

class ChatMessage extends React.Component {
    render() {
        return (
            <div className={styles.message}>
                <div>
                    <span className={styles.id}>#{this.props.id}</span>
                    <span className={styles.user}>{this.props.userName}</span>
                    <span className={styles.date}>{this.props.date}</span>
                </div>
                <div className={styles.content}>{this.props.content}</div>
            </div>
        )
    }
}


export default ChatMessage;