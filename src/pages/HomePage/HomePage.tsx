import {FC} from "react";
import styles from './HomePage.module.scss'
import videoB from './images/main.mp4'
import {NavLink} from "react-router-dom";
export const HomePage: FC = () => {
    return (
        <main className={styles.Main}>
            <video src={videoB} autoPlay loop muted className={styles.Video}></video>
            <div className={styles.Content}>
                <h1>NE4TO</h1>
                <p>Anytime. Anywhere. Anyone.</p>
                <div className={styles.ButtonsWrapper}>
                    <NavLink to='/login' className={styles.Button}>Login</NavLink>
                    <NavLink to='/registration' className={styles.Button}>Register</NavLink>
                </div>
            </div>
        </main>
    )
}