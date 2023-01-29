import './reset.css'
import './styles/homePage.css'
import './styles/dashboard.css'
import './App.css'
import { Form } from './components/Form'
import { useState } from 'react'
import { List } from './components/List'
import { TotalMoney } from './components/TotalMoney'
import { Header } from './components/Header'

function App() {
  const [listTransactions, setListTransactions] = useState([
    { description: "Salário recebido", type: "entrada", value: 2500 },
    { description: "Conta de luz", type: "saída", value: -150 }
])      
  const [page, setPage] = useState('homePage')
  
  return page === 'homePage' ?
      <div className='homePage'>
        <div className="contentHome">
        <img src="./src/assets/Nu Kenzie.svg" alt="" />
        <h1>Centralize o controle das suas finanças</h1>
        <p>de forma rápida e segura</p>
        <button type='button' onClick={() => setPage('dashboard')}>Iniciar</button>
        </div>
        <div><img src="./src/assets/Illustration.svg" alt="" /></div>
      </div>
    :<div className='dashboard'>
      <Header onClick={() => setPage('homePage')}/>
      <main className='mainDash'>
        <div className="leftSide">
        <Form state = {listTransactions} setListTransactions = {setListTransactions}/>          
        {listTransactions.length > 0 && <TotalMoney state = {listTransactions} />}
        </div>
        <List listTransactions = {listTransactions} setListTransactions = {setListTransactions} />
      </main>
    </div>
}
export default App