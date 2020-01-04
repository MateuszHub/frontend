import React from 'react';
import './LoginForm.scss';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            logged: false
        };
        this.onInputLogin = this.onInputLogin.bind(this);
        this.onInputPassword = this.onInputPassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onLogout = this.onLogout.bind(this);
    }

    onInputLogin(e) {
        this.setState((state) => ({
            login: e.target && e.target.value
        }))
    }

    onInputPassword(e) {
        this.setState((state) => ({
            password: e.target && e.target.value
        }))
    }

    onSubmit(e) {
        e.preventDefault();
        this.setState((state) => ({
            logged: true
        }))
    }

    onLogout() {
        this.setState((state) => ({
            logged: false
        }))
    }

    render() {
        if (this.state.logged)
            return (
                <div className="login">
                    <p>Jesteś zalogowany</p>
                    <button type="button" onClick={this.onLogout}>Wyloguj</button>
                </div>
            )
        return (
            <div className="login">
                <form onSubmit={this.onSubmit}>
                    <label htmlFor="login">Login:</label>
                    <input type="text" required value={this.state.login} onInput={this.onInputLogin} id="login"></input>
                    <label htmlFor="pass">Hasło:</label>
                    <input type="password" required onInput={this.onInputPassword} id="pass"></input>
                    <button type="submit">Zaloguj</button>
                </form>
            </div>
        )
    }
}


export default LoginForm;