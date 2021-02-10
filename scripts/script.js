// Script.js

window.addEventListener('DOMContentLoaded', () => {
  // TODO
  
  // Create fetch request to: https://fakestoreapi.com/products
  var response;
  fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(response => console.log(response));

  
  myStorage = window.localStorage;
  
  
});

// id, title, price, description, category, image

// Points: fetch data from url

// add array of javascript objects to local storage
