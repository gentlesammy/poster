import Counter from "./bank_components/Counter"
import Atm from "./bank_components/Atm"
import Pos from "./bank_components/Pos"
import {useState} from "react";
import Success from "./bank_components/Success";
import Warning from "./bank_components/Warning";


const Bank = () => {

    //let accountBalance = 1000; // if accountBalance will be changing, we should never store it in a variable. because whenever it changes, react will not update the dom
    //keeping account balance inside state
        //a state to manage the accountbalance
        //
         const [accountBalance,  setAccountBalance]  =    useState(1000)
         // a state to manage what user is typing in input amount
         const [amount, setAmount] = useState(0);
         function update_amount(e){
            setAmount(e.target.value);
         }

  return (
    <div className="container">
        <h1>Bank Application: { accountBalance }</h1>
        {accountBalance > 1000 ? <Success /> : <Warning /> }
        <button className="btn btn-danger" onClick={()=>{
            if(amount < accountBalance){
                 setAccountBalance(accountBalance-amount)
            }else{
                alert("Oga, you cant wiithdraw more than what you have ");
            }

        }}>Withdraw</button>
        <input type="number" value={amount} onChange={update_amount} />  
        <button className="btn btn-primary" onClick={()=>{
            setAccountBalance(accountBalance+ Number(amount))
        }}>Deposit</button>
        <Counter ab = {accountBalance} />
        <Atm  ab = {accountBalance}/>
        <Pos  ab = {accountBalance}/>
    </div>
  )
}

export default Bank