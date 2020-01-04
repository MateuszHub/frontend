import React from 'react';
import './Info.scss';
import LightContentBox from '../Ui/LightContentBox';

class Info extends React.Component {
    render() {
        return (
            <div className="homepage">
                <LightContentBox>
                    <p>Strona stworzona jako projekt 1 z programowania dla www. Oparta o react, narazie nie posiada backendu. </p>
                    <p>Stworzona przez Mateusza Nowaka</p>
                </LightContentBox>
            </div>
        )
    }
}


export default Info;