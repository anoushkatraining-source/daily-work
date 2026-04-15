import React, { useState, useEffect } from "react";
import axios from "axios";
function OrderForm() {
  const [item, setItem] = useState("");
  const [price, setPrice] = useState("");
  const [message, setMessage] = useState("");
  const [orders, setOrders] = useState([]);
  const fetchOrders = async () => {
    try {
      const response = await axios.get("http://localhost:8080/order");
      setOrders(response.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };
  useEffect(() => {
    fetchOrders();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    const orderPayload = {
      status: "CREATED",
      orderLines: [{ item: item, price: Number(price) }],
    };
    try {
      const response = await axios.post("http://localhost:8080/order",orderPayload,
        { headers: { "Content-Type": "application/json" } }
      );
      setMessage(` Order created successfully!`);
      setItem("");
      setPrice("");
      fetchOrders();
    } catch (error) {
      console.error("Error:", error);
      setMessage("Failed to create order");
    }
  };
  return (
    <div className="container">
      <div className="form-container">
        <h2 className="title">Create Order</h2>
        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            placeholder="Enter Item"
            value={item}
            onChange={(e) => setItem(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Enter Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
          <button type="submit">Submit</button>
          {message && <p className="message">{message}</p>}
        </form>
      </div>
      <div className="order-list-container">
        <h2 className="title">Order List</h2>
        <div className="order-list">
          {orders.length === 0 ? (
            <p className="empty">No orders found</p>
          ) : (
            orders.map((order) => (
              <div key={order.id} className="order-card">
                <p>
                  <strong>Order ID:</strong> {order.id}
                </p>
                {order.orderLines.map((line) => (
                  <div key={line.id} className="order-line">
                    <p>Item: {line.item}</p>
                    <p>Price: ₹{line.price}</p>
                  </div>
                ))}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
export default OrderForm;