import { React, useEffect, useState } from "react";
import Card from "../../component/card/Card";

const SecondSection = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(API_URL);
        const listProducts = await response.json();
        setProducts(listProducts);
        console.log(listProducts);
      } catch (err) {
        console.log(err.stack);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="pt-3 ">
      <Card products={products} />
    </div>
  );
};

export default SecondSection;
