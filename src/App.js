import { useState } from "react";
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Products from './components/Products';

import { BrowserRouter } from 'react-router-dom';

const products = [
  {title: "one", price: "500", category: "dishes", image: "https://cdn.27.ua/799/f5/6a/914794_2.jpeg"},
  {title: "two", price: "450", category: "dishes", image: "https://content.rozetka.com.ua/goods/images/big/66421109.jpg"},
  {title: "three", price: "550", category: "dishes", image: "https://family.ua/assets/cache/images/1000/images/catalog/50675/0972031001676644254.jpg"},
  {title: "four", price: "500", category: "dishes", image: "https://content.rozetka.com.ua/goods/images/big/66421109.jpg"},
  {title: "five", price: "450", category: "dishes", image: "https://content.rozetka.com.ua/goods/images/big/66421109.jpg"},
  {title: "six", price: "550", category: "dishes", image: "https://family.ua/assets/cache/images/1000/images/catalog/50675/0972031001676644254.jpg"},
  {title: "seven", price: "500", category: "dishes", image: "https://cdn.27.ua/799/f5/6a/914794_2.jpeg"},
  {title: "eight", price: "450", category: "dishes", image: "https://content.rozetka.com.ua/goods/images/big/66421109.jpg"},
  {title: "nine", price: "550", category: "dishes", image: "https://family.ua/assets/cache/images/1000/images/catalog/50675/0972031001676644254.jpg"}
];

function App() {
  const [productsInfo, setProductsInfo] = useState(products);

  return (
    <BrowserRouter>
      <NavBar/>
      <Products products={productsInfo}/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;