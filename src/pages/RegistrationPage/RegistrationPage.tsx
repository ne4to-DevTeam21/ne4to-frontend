import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import styles from './RegistrationPage.module.scss';

export const RegistrationPage: FC = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            const response = await axios.post('http://localhost:8090/eto_nechto/registration', {
                username,
                password,
                email
            });

            if (response.status === 200 || response.status === 201) {
                navigate('/rules');
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                if (error.response) {
                    if (error.response.status === 400) {
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
        <div className={styles.RegistrationPage}>
            <h1>Register</h1>
            <form onSubmit={handleRegister}>
                <input
                    type="text"
                    placeholder="Логин"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    disabled={loading}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    {loading ? "Загрузка..." : "Зарегистрироваться"}
                </button>
            </form>
            {error && <p className={styles.Error}>{error}</p>}
        </div>
    );
}
