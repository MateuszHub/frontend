import React from 'react';
import styles from './Account.module.scss';
import LightContentBox from '../Ui/LightContentBox';


class Account extends React.Component {
    render() {
        return (
            <div className="homepage">
                <LightContentBox>
                    <div class={styles.flex}>
                        <div className={styles.img_container}>
                            <img src="/logo512.png" className={styles.img} alt="avatar"></img>
                        </div>
                        <div className={styles.user}>
                            <u>Nazwa</u>
                            <p>User1</p>
                            <u>Email</u>
                            <p>m@wp.pl</p>
                            <u>Zmien avatar</u>
                            <input type="file"></input>
                        </div>
                    </div>
                </LightContentBox>
            </div>
        )
    }
}


export default Account;