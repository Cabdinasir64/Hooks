import React from "react";
import { useAppContext } from './usecontext13'

function Cart() {
  const { cart, removeFromCart, theme } = useAppContext();

  if (cart.length === 0) return <p>Your cart is empty.</p>;

  return (
    <div className={`p-4 rounded-lg shadow ${theme === "dark" ? "bg-gray-700 text-white" : "bg-white"} w-full max-w-2xl`}>
      <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
      {cart.map(item => (
        <div key={item.id} className="flex justify-between items-center mb-2">
          <span>{item.name} - ${item.price}</span>
          <button
            onClick={() => removeFromCart(item.id)}
            className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-700"
          >
            Remove
          </button>
        </div>
      ))}
      <p className="font-bold mt-2">Total: ${cart.reduce((sum, item) => sum + item.price, 0)}</p>
    </div>
  );
}

export default Cart;
