import React, { useContext, useState } from "react";
import { ShopContext } from "../../context/shop-context";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";

export const Checkout = () => {
  const { getTotalCartAmount } = useContext(ShopContext);
  const navigate = useNavigate();

  const totalAmount = getTotalCartAmount();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    postcode: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Order placed successfully!");
    navigate("/");
  };

  return (
    <div className="checkout-page">
      <div className="checkout-card">
        <h1>Checkout</h1>

        <p className="checkout-total">
          Total: ${totalAmount}
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="address"
            placeholder="Street Address"
            value={formData.address}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="postcode"
            placeholder="Postcode"
            value={formData.postcode}
            onChange={handleChange}
            required
          />

          <button type="submit">
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
};