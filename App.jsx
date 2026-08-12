import React from 'react'
import {useList} from './context/list'


function App() {

  const { addToCart,cart } = useList();
  const product1 = {
    name: "Shoes",
    price: 500,

};
  const product2 = {
    name: "jeans",
    price: 999,
    
  };
  const product3 = {
    name: "the shirt",
    price: 500,

};

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-red-500">
      <div className="bg-white p-8 rounded-2xl shadow-md flex flex-col items-center gap-4 h-96 ">
      <h1 className="text-4xl font-bold text-gray-800 gap-8 ">Shopping Cart</h1>
      <button onClick={() => addToCart(product1)}>Click to ADD {product1.name}- ${product1.price.toFixed(2)}</button>
      <button onClick={() => addToCart(product2)}>Click to ADD {product2.name}- ${product2.price.toFixed(2)}</button>
      <button onClick={() => addToCart(product3)}>Click to ADD {product3.name}- ${product3.price.toFixed(2)}</button>
      <button onClick={() => addToCart(product3, product1)}>Click to ADD combo</button>

     <ul>
    {cart.map((item) => (
        <li>
            {item.name} - ${item.price.toFixed(2)}
        </li>
    ))}
</ul>
    </div>
    </div>
  )
}

export default App