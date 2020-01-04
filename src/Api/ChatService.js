
import { chatInput } from './../chatInput'


export default class ChatService {
    constructor() {
        this.msgUniqueId = 0;
        this.chat = [];
        chatInput.forEach(message => { this.addMessage(message) });
        this.counter = 0;
    }

    addMessage(message) {
        message.id = this.msgUniqueId++;
        this.chat = [...this.chat, message];
    }
    getNext() {
        if (this.counter < this.chat.length)
            return this.chat[this.counter++];
        return null;
    }
}