import React from 'react';
import LoginForm from './LoginForm'
import './Home.scss';
import LightContentBox from '../Ui/LightContentBox';

class Home extends React.Component {
    render() {
        return (
            <div className="homepage">
                <LightContentBox>Zaimplementowałem nastepujace fukcjonalności: <br/>
                    accordion - menu<br/>
                    tabelka z filtrami i sortowaniem - zakladka informacje/użytkownicy<br/>
                    infinite scrolling - zakładka czat/wszystkie 
                </LightContentBox>
                <LoginForm className="login"> </LoginForm>
            </div>
        )
    }
}


export default Home;