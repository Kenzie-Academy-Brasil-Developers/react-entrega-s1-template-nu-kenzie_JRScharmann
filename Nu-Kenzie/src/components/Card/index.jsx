import styles from './styles.module.css'

export function Card( {transaction, index, setListTransactions, listTransactions} ) {
    function handleButton() {
        const listArray = [...listTransactions]
        listArray.splice(index,1)
        setListTransactions(listArray)
    }
    return(
        <>
        {transaction.type === 'entrada' ? (
            <li className={styles.entrada}>
                <div className={styles.esquerdaLi}>
                    <p>{transaction.description}</p>
                    <span>{transaction.type}</span>
                </div>
            <div className={styles.direitaLi}>
            <span className={styles.spanValue}>R${transaction.value}</span>
            <button className={styles.buttonTrash} onClick={handleButton}><img src="./src/assets/trash.svg" alt="" /></button>
            </div>
        </li>
        ): (
            <li className={styles.saida}>
                <div className={styles.esquerdaLi}>
                    <p>{transaction.description}</p>
                    <span>{transaction.type}</span>
                </div>
            <div className={styles.direitaLi}>
            <span className={styles.spanValue}>R${transaction.value}</span>
            <button className={styles.buttonTrash} onClick={handleButton}><img src="./src/assets/trash.svg" alt="" /></button>
            </div>
        </li>
        )}
        </>
    )
}