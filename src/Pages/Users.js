import React from 'react';
import styles from './Users.module.scss';
import { Link } from 'react-router-dom';
import UsersService from '../Api/UsersService';
import LightContentBox from '../Ui/LightContentBox';
import Table from '../Ui/Table';
import User from '../Helpers/User';

class Users extends React.Component {
    constructor(props) {
        super(props);
        this.usersSerivce = new UsersService();
        this.state = {
            users: [],
            loaded: false
        }
    }


    componentDidMount() {
        this.usersSerivce.getAllUsers().then((users) => {
            console.log(users)
            this.setState((state) => ({
                loaded: true,
                users: users
            }))
        })
    }

    createFilters() {
        return [{
            id: 1,
            desc: "Email z polskiej domeny",
            fun: (data) => data.email.split(".").pop().toLowerCase() === "pl"
        },
        {
            id: 2,
            desc: "Ponad 15 wpisów",
            fun: (data) => data.numberOfMessages > 15
        },
        {
            id: 3,
            desc: "Dołączył w 2019 roku",
            fun: (data) => data.joinDate.split(".").shift() === "2019"
        }]
    }

    render() {
        if (this.state.loaded)
            return (
                <div className={styles.main}>
                    <LightContentBox>
                        <Table
                            filters={this.createFilters()}
                            headers={["Nazwa", "Email", "Data dołączenia", "Liczba wpisów"]}
                            keysToDataProps={[...User.getKeys()]}
                            data={this.state.users}
                        ></Table>
                    </LightContentBox>
                </div>
            )
        return null
    }
}


export default Users;