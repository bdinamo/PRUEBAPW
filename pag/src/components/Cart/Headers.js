import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';


export default function Header(props) {
  return (
    <header className="block row center">
      <div>
        <a classname = 'a' href="#/">
          <h1>Tienda virtual</h1>
        </a>
      </div>
      <div>
        <a classname = 'a' href="#/cart">
        <FontAwesomeIcon icon={faCartArrowDown} />{' '}
          {props.countCartItems ? (
            <button className="badge" className= '.button.badge'>{props.countCartItems}</button>
          ) : (
            ''
          )}
        </a>{' '}
      </div>
    </header>
  );
}