import React, { useState, useEffect } from "react";
import axios from "axios";

function OrderForm() {
  const [item, setItem] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState("");
  const [orders, setOrders] = useState([]);

  // 🔥 Get token safely
  const token = localStorage.getItem("token");

  // 🔥 If token missing, request will fail clearly
  const authHeader = {
    headers: {
      "Content-Type": "application/json",
      Authorization: token ? `Bearer ${token}` : ""
    }
  };

  // GET ORDERS
  const fetchOrders = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8080/order",
        authHeader
      );
      setOrders(res.data);
    } catch (error) {
      console.log("GET ERROR:", error.response?.data || error.message);
      setMessage("Failed to fetch orders (401 Unauthorized)");
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  // CREATE ORDER
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    // 🚨 IMPORTANT: backend expects "Status" (capital S)
    const orderPayload = {
      Status: "CREATED",
      orderLines: [
        {
          item: item,
          price: Number(price),
          quantity: Number(quantity)
        }
      ]
    };

    try {
      const token = localStorage.getItem("token");

      if (!token) {
        setMessage("No token found. Please login first.");
        return;
      }

      await axios.post(
        "http://localhost:8080/order",
        orderPayload,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          }
        }
      );

      setMessage("Order created successfully ✔");

      setItem("");
      setPrice("");
      setQuantity(1);

      fetchOrders();

    } catch (error) {
      console.log("FULL ERROR:", error.response?.data || error.message);
      setMessage(
        error.response?.data?.message ||
        "Failed to create order (401 Unauthorized)"
      );
    }
  };

  return (
    <div className="container">

      {/* FORM */}
      <div className="form-container">
        <h2 className="title">Create Order</h2>

        <form onSubmit={handleSubmit} className="form">

          <input
            type="text"
            placeholder="Item"
            value={item}
            onChange={(e) => setItem(e.target.value)}
            required
          />

          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />

          <input
            type="number"
            placeholder="Quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
          />

          <button type="submit">Submit</button>

          {message && <p className="message">{message}</p>}
        </form>
      </div>

      {/* ORDER LIST */}
      <div className="order-list-container">
        <h2 className="title">Order List</h2>

        <div className="order-list">
          {orders.length === 0 ? (
            <p className="empty">No orders found</p>
          ) : (
            orders.map((order) => (
              <div key={order.id} className="order-card">

                <p><strong>Order ID:</strong> {order.id}</p>
                <p><strong>Status:</strong> {order.status}</p>

                {order.orderLines?.map((line) => (
                  <div key={line.id} className="order-line">
                    <p>Item: {line.item}</p>
                    <p>Price: ₹{line.price}</p>
                    <p>Quantity: {line.quantity}</p>
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