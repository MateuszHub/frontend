import React from 'react';
import './Navigation.scss';
import NavigationItem from './NavigationItem'

class Navigation extends React.Component {
    render() {
        return (
            <nav className="w-100 py-3">   
                <NavigationItem className="mx-2" name="Strona główna" targets='[{"domowa": "/"}]'></NavigationItem>
                <NavigationItem className="mx-2" name="Czat" targets='[{"wszystkie": "/chat"}]'></NavigationItem>
                <NavigationItem className="mx-2" name="Informacje" targets='[{"użytkownicy": "/users"}, {"moje konto": "/account"}, {"o stronie": "/info"}]'></NavigationItem>
            </nav>
        )
    }
}


export default Navigation;