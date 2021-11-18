import "./App.css";
import Sidebar from "./Component/topbar/Sidebar/Sidebar";
import Topbar from "./Component/topbar/Topbar";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {UserList} from "./Pages/UserList/UserList";
import User from "./Pages/User/User";
import NewUser from "./Pages/NewUser/NewUser"
import ProductList from "./Pages/ProductList/ProductList"
import Product from "./Pages/Product/Product";
import NewProduct from "./Pages/NewProduct/NewProduct";

function App() {
  return (
    <>
    <Router>
      <div className="App">
        <Topbar />
        <div className="container">
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/users" element={<UserList/>}/>                
          <Route exact path="/user/:userId" element={<User/>}/>                
          <Route exact path="/newuser" element={<NewUser/>}/>                
          <Route exact path="/products" element={<ProductList/>}/>                
          <Route exact path="/product/:productsId" element={<Product/>}/>                
          <Route exact path="/newProduct" element={<NewProduct/>}/>                
          </Routes>
          
        
        </div>
             </div>
    </Router>
    </>
  );
}

export default App;
