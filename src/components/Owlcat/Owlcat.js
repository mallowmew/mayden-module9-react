import React from 'react';
import './Owlcat.css';

const pics = {
  panda: 'http://bit.ly/1Tqltv5',
  owl: 'http://bit.ly/1XGtkM3',
  owlCat: 'http://bit.ly/1Upbczi'
};

export function Panda() {
  return (
    <img
    src={ pics.panda }
    alt='Lazy Panda' />
  );
}

export function Owl() {
  return (
    <img
    src={ pics.owl }
    alt='Unimpressed Owl' />
  );
}

export function Owlcat() {
  return (
    <img
    src={ pics.owlCat }
    alt='Ghastly Abomination' />
  );
}

//export default {Panda, Owl, Owlcat}; // don't know why this way doesn't work
