import styles from './styles.module.css'

export function TotalMoney ({state}) { 
    if(state.length > 0){
        const result = state.reduce((acc, current) => acc + current.value, 0)
        return(
            <div className={styles.valorTotal}>
                <div className={styles.valorDiv}>
                    <h2>Valor total:</h2> <p>R$ {result}</p>
                </div>
            <span className={styles.valorSpan}>O valor se refere ao saldo</span>
        </div>
        )
    }
}