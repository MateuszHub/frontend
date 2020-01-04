export default class User{
    constructor(name, email, joinDate, numberOfMessages) {
        this.name = name;
        this.email = email;
        this.joinDate = joinDate;
        this.numberOfMessages= numberOfMessages;
    }
    static getKeys() {
        return ["name", "email", "joinDate", "numberOfMessages"]
    }
}