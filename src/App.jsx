import Header from './components/Header'
import Balance from './components/Balance'
import IncomeExpenses from './components/IncomeExpenses'
import TransactionList from './components/TransactionList'
import AddTransaction from './components/AddTransaction'

import { GlobalProvider } from './context/GlobalState'

import './App.css'

export default function App(){
    return (
        <GlobalProvider >
            <Header />
            <Balance />
            <IncomeExpenses />
            <TransactionList />
            <AddTransaction />
        </GlobalProvider>
    )
}