
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavScrollExample from "./Navbar/navbar";
import HomePage from "./Home/Homepage";
import Product from "./Products/Product";
import Scroll from "./ScrollCard/Scroll";
import Laptop from "./Scroll-Laptop/Laptop";
import New from "./New/New";



function App() {
    return (
      <section>
      

        <NavScrollExample />
        <HomePage />
        <Product />
        <h2 className="title">Viral Products</h2>
        <Scroll />
        <h2 className="title">Laptop</h2>
        <Laptop />
        <h2 className="title">New Product</h2>
        < New />
       
      </section>
    );
}


export default App;
