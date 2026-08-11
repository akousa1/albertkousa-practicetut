import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./products";
import "./shop.css";

export default function Shop() {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1> Shopping Cart</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}
