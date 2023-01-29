import styles from './styles.module.css'
import NuKenzie from "../../assets/Nu Kenzie dashboard.svg"

export function Header({onClick}) {
    return (
    <header>
        <img src={NuKenzie} alt="" /> <button className={styles.button} type='button' onClick={onClick}>Início</button>
    </header>)
}