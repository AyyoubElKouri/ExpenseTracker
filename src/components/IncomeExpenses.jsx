import { useContext } from "react"
import { GlobalContext } from "../context/GlobalState"


export default function IncomeExpenses(){
    const { transaction } = useContext(GlobalContext);

    const amounts = transaction.map(transaction => transaction.amount);
    const plus = amounts.filter(item => item > 0).reduce((prev, next) => prev+=next, 0).toFixed(2);
    const minus = amounts.filter(item => item < 0).reduce((prev, next) => prev += next, 0).toFixed(2);


    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">{plus} DH</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">{minus} DH</p>
            </div>
        </div>
    )
}