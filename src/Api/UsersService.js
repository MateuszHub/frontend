import User from './../Helpers/User'

export default class UsersService {
    constructor() {
        this.users = [];

    }

    handleCsvData(data) {
        let output = data.split(/\r?\n/);
        output.splice(0, 1);
        output = output.filter(data => data.trim().length > 0);
        let users = [];
        return output.map(line => {
            let user = line.split(",");
            return new User(...user);
        })
    }

    async getAllUsers() {
        if (this.users.length === 0)
            this.users = await new Promise((resolve) =>
                fetch("/users.csv").then(response => {
                    response.text().then(csv => {
                        let output = this.handleCsvData(csv);
                        resolve(output);
                    })
                }))
        return this.users;
    }
}