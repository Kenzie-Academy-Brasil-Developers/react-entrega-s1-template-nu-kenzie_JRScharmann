import styles from './styles.module.css'
import noList from "../../assets/noList.svg"

export function EmptySpace() {
    return (
        <>
            <h3>Resumo financeiro</h3>
            <h2 className={styles.h2Empty}>Você ainda não possui nenhum lançamento</h2>
            <div className={styles.imageList}>
                <img src={noList} alt="" />
                <img src={noList} alt="" />
                <img src={noList} alt="" />
            </div>
        </>
    )
}