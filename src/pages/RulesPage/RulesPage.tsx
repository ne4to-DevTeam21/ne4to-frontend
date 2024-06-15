import { FC } from "react";
import styles from './RulesPage.module.scss';

/*TODO: ну тут точно над дизайном надо подумать...*/
export const RulesPage: FC = () => {
    return (
        <div className={styles.RulesPage}>
            <h1>Правила игры "Нечто"</h1>
            <div className={styles.RulesContent}>
                <h2>Цель</h2>
                <p>Цель игры...</p>
                <h2>Начало</h2>
                <p>В начале игры...</p>
                <h2>Игра</h2>
                <p>На каждом ходу...</p>
                <h2>Победа</h2>
                <p>Нечто всех заразил...</p>
            </div>
        </div>
    );
}
