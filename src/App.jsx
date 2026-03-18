import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer"
import Dashboard from "./components/Dashboard"
import Login from "./components/Login"
import "./style.css";
const  App = () => {


 const appName  = "Chopchop App"; // assume this is coming from an api
 let walletBalance = 1000; 
 let isLoggedIn = true;  
 const students = ["Yemi", "David", "scoffield", "Ojule"];

 const products = [
    {id:1, name: "handkerchief", price: 1000},
    {id:2, name: "Detol Soap", price: 3000},
    {id:3, name: "Greek Yogurt Parfait", price: 16000},
    {id:4, name: "Exotic Fruit Salad", price: 20000}
 ];
 


return (
    //jsx
    <div className="container">
    {/* conditional rendering */}
    { isLoggedIn ? <Dashboard /> : <Login /> }
      <Header   name={appName}  wb = {walletBalance}  />
      <div className="row myrow">
          <Main products={products}/>
          <Sidebar  students = {students} />
      </div>
      
      <Footer  wb = {walletBalance} />

    </div>

)


}

export default App;