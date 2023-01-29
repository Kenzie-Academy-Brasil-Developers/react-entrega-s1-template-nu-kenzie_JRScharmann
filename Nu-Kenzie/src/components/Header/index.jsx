import styles from './styles.module.css'

export function Header({onClick}) {
    return (
    <header>
        <img src="./src/assets/Nu Kenzie dashboard.svg" alt="" /> <button className={styles.button} type='button' onClick={onClick}>Início</button>
    </header>)
}