import { useContext } from "react"
import { GlobalContext } from "../context/GlobalState"

export default function Balance(){
    const { transaction } = useContext(GlobalContext);

    const amounts = transaction.map(transaction => transaction.amount);
    const total = amounts.reduce((prev, next) => (prev += next), 0).toFixed(2);

    return (
        <div className="container">
            <h4>Your Balance</h4>
            <h1 >{total} DH</h1>
        </div>
    )
}