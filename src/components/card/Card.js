import React from 'react';
import './card.css'
import './images/css-logo.png';

function Card() {

  return(
    <div className="cards">
      <article className="card">
        <header>
            <h2>A short heading</h2>
        </header>    
        <img src="css-logo.png" alt="css stuff" />
        <div className="content">
            <p>Short content.</p>
        </div>
        <footer>I have a footer!</footer>
      </article>
      <article className="card">
        <header>
            <h2>A short heading</h2>
        </header>    
        <img src="balloons2.jpg" alt="Hot air balloons" />
        <div className="content">
            <p>Short content.</p>
        </div>
        <footer>I have a footer!</footer>
      </article>
      <article className="card">
        <header>
            <h2>A short heading</h2>
        </header>    
        <img src="balloons2.jpg" alt="Hot air balloons" />
        <div className="content">
            <p>Short content.</p>
        </div>
        <footer>I have a footer!</footer>
      </article>
    </div>
  )
}

export default Card;