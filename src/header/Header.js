import React from 'react';
import './header.css';

export default function Header() {
  return(
    <div>
      <div className="understated">
      My Header goes here.
      <form>
        <input type="text" placeholder="Username" name="username"/>
        <input type="text" placeholder="Password" name="psw"/>
        <button type="submit">Login</button>
      </form>
      </div>
    </div>
    
  )
}