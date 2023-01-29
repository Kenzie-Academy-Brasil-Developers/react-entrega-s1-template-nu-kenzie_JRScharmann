import styles from './styles.module.css'
import { useState } from "react"

export function Form({state, setListTransactions}) {
    const [description, setDescription] = useState('')
    const [amount, setAmount] = useState(1)
    const [type, setType] = useState('entrada')

    function handleSubmit(event){
        event.preventDefault()
        const value = type === 'entrada' ? amount : amount * -1
        setListTransactions((oldTransactions) => [...oldTransactions, { description , type, value}])
    }
    return(
        <form onSubmit={handleSubmit}>
            <label className={styles.descriptionLabel} htmlFor="description">Descrição</label>
                <input type="text" 
                className={styles.descriptionInput} 
                id="description" 
                placeholder="Digite aqui sua descrição"
                onChange={(event) => setDescription(event.target.value)}
                />
            <div className={styles.bottomSelects}>
                <div className={styles.amountDiv}>
                    <label className={styles.amountLabel}  htmlFor="amount">Valor</label>
                        <input type="number" 
                        className={styles.amountInput}
                        id="amount" 
                        min={1}
                        placeholder= {1}
                        onChange={(event) => setAmount(parseFloat(event.target.value))}
                        />        
                </div>
                <div className={styles.typeDiv}>
                    <label className={styles.typeLabel}  htmlFor="type">Tipo de valor</label>
                        <select name="" 
                        className={styles.typeSelect}
                        id="type"
                        onChange={(event) => setType(event.target.value)}
                        defaultValue = 'escolha'
                        >
                            <option value="entrada">Entrada</option>
                            <option value="saída">Saída</option>
                        </select>
                </div>
            </div>
           
            <button className={styles.buttonSubmit} type="submit">Inserir valor</button>
        </form> 
    )
}