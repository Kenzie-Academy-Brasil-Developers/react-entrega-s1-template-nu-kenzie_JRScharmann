import styles from './styles.module.css'

export function EmptySpace() {
    return (
        <>
            <h3>Resumo financeiro</h3>
            <h2 className={styles.h2Empty}>Você ainda não possui nenhum lançamento</h2>
            <div className={styles.imageList}>
                <img src="./src/assets/noList.svg" alt="" />
                <img src="./src/assets/noList.svg" alt="" />
                <img src="./src/assets/noList.svg" alt="" />
            </div>
        </>
    )
}