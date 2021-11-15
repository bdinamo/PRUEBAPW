import React from 'react';

export default function Header(props) {
  return (
    <header className="block row center">
      <div>
        <a classname = 'a' href="#/">
          <h1>Carrito de compras</h1>
        </a>
      </div>
      <div>
        <a classname = 'a' href="#/cart">
          Cart{' '}
          {props.countCartItems ? (
            <button className="badge" className= '.button.badge'>{props.countCartItems}</button>
          ) : (
            ''
          )}
        </a>{' '}
        <a classname = 'a' href="#/signin"> SignIn</a>
      </div>
    </header>
  );
}