
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavScrollExample from "./Navbar/navbar";
import HomePage from "./Home/Homepage";
import Product from "./Products/Product";


// Placeholder components for the routes
// const Home = () => <h2>Welcome to ElectronicHub</h2>;
// const Products = () => <h2>Our Products</h2>;
// const Smartphones = () => <h2>Smartphones</h2>;
// const Laptops = () => <h2>Laptops</h2>;
// const Accessories = () => <h2>Accessories</h2>;
// const Contact = () => <h2>Contact Us</h2>;
function App() {
    return (
      <section>
        {/* <Routes>
          <Route path="./Home" element={<Home />} />
          <Route path="./Product" element={<Products />} />
          <Route path="./Smartphone" element={<Smartphones />} />
          <Route path="./Laptop" element={<Laptops />} />
          <Route path="./Accessories" element={<Accessories />} />
          <Route path="./Contact" element={<Contact />} />
        </Routes> */}

        <NavScrollExample />
        <HomePage />
        < Product />
      </section>
    );
}


export default App;
