import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import styles from './HomePage.module.scss';
import videoB from './images/main.mp4';
import { NavLink } from "react-router-dom";

export const HomePage: FC = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            const response = await axios.post('http://localhost:5000/eto_nechto/login', {
                username,
                password
            });

            if (response.status === 200 || response.status === 201) {
                navigate('/rules');
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                if (error.response) {
                    if (error.response.status === 401) {
                        setError("Ошибка авторизации. Проверьте логин и пароль.");
                    } else if (error.response.status === 500) {
                        setError("Ошибка сервера");
                    }
                } else {
                    setError("Не удалось получить ответ от сервера. Проверьте подключение.");
                }
            } else {
                setError("Неизвестная ошибка");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className={styles.Main}>
            <div className={styles.VideoContainer}>
                <video src={videoB} autoPlay loop muted className={styles.Video}></video>
                <div className={styles.Content}>
                    <h1>NE4TO</h1>
                    <p>Anytime. Anywhere. Anyone.</p>
                    <div className={styles.ButtonsWrapper}>
                        <NavLink to='/registration' className={styles.Button}>Register</NavLink>
                    </div>
                </div>
            </div>
            <div className={styles.LoginForm}>
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <input
                        type="text"
                        placeholder="Логин"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        disabled={loading}
                    />
                    <input
                        type="password"
                        placeholder="Пароль"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        disabled={loading}
                    />
                    <button type="submit" disabled={loading}>
                        {loading ? "Загрузка..." : "Войти"}
                    </button>
                </form>
                {error && <p className={styles.Error}>{error}</p>}
            </div>
        </main>
    )
}
