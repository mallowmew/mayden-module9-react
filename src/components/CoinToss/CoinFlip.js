import React from 'react';

function flip () {
  // Randomly return either 'heads' or 'tails'.
  return Math.random() < 0.5 ? 'heads' : 'tails';
}

export default function CoinToss() {
  return (
    <div className="coin-flip">
      <p>Inline If-Else in JSX must use ternary operators.</p>
      <p>Shows 'Kitty' or 'Puppy':</p>
      <p>{ flip() === 'heads' ? 'Kitty!' : 'Puppy!' }</p>
    </div>
  );
}