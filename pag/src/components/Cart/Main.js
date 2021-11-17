
import React from 'react';
import Product from './prod';

export default function Main(props) {
  const { products, onAdd } = props;
  return (
    <main className="block col-2">
      <h2 classname = 'h1'>Products</h2>
      <div className="all-cards">
        {products.map((product) => (
          <Product key={product.id} product={product} onAdd={onAdd}></Product>
        ))}
      </div>
    </main>
  );
}