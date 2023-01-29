import styles from './styles.module.css'
import { Card } from "../Card"
import { EmptySpace } from "../EmptySpace"

export function List({listTransactions, setListTransactions}) {
    return(
        <div className={styles.rightSide}>
            {listTransactions.length > 0 ? (
                <>
                <h3>Resumo financeiro</h3>
                <ul className={styles.ulList}>
                    {listTransactions.map((transaction, index) => <Card transaction={transaction} key={index} index={index}  setListTransactions={setListTransactions} listTransactions={listTransactions}/>)}   
                </ul>
                </>
            ): (
                <EmptySpace/>
            )}
        </div>
    )  
}