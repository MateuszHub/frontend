import React from 'react';
import './Chat.scss';
import ChatMessage from './ChatMessage'
import ChatService from './../Api/ChatService'
import Lodash from 'lodash'
import LightContentBox from '../Ui/LightContentBox';

class Chat extends React.Component {
    static NUM_OF_INITIAL_POSTS = 5;
    constructor(props) {
        super(props);
        this.state = {
            chat: []
        }
        this.messageRefs = [];
        this.chatService = new ChatService();

    }

    componentDidMount() {
        this.loadMessagesOnInit();
        window.addEventListener("scroll", Lodash.debounce(this.onScroll.bind(this), 100));
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", Lodash.debounce(this.onScroll.bind(this), 100))
    }

    onScroll() {
        if (this.areAllMessagesRead())
            for (let i = 0; i < 5; i++)
                this.getNewMessage();
    }

    loadMessagesOnInit() {
        this.getNewMessage(() => { if (this.areAllMessagesRead()) this.loadMessagesOnInit() });
    }

    getNewMessage(callback = () => { }) {
        this.setState((state) => ({
            chat: [...state.chat, this.chatService.getNext()]
        }), () => callback());
    }

    handleRef(r) {
        this.messageRefs = [...this.messageRefs, r];
    }

    areAllMessagesRead() {
        return this.messageRefs.filter(ref => ref && ref.getBoundingClientRect().y >= window.innerHeight).length === 0;
    }

    render() {
        let chat = this.state.chat.map(m => {
            if (m)
                return <div key={m.id} className="message" ref={r => this.handleRef(r)}><ChatMessage {...m}></ChatMessage></div>
        });
        return (
            <div className="container">
                <LightContentBox>
                    {chat}
                </LightContentBox>
            </div>
        )
    }
}


export default Chat;