import React, { useEffect, useState } from "react";

export const PromiseAll = () => {
  const [products, setProducts] = useState([]);  // Declare state variable to store list of products
  const [categories, setCategories] = useState([]);  // Declare state variable to store list of categories

  useEffect(() => {
    // Make HTTP request to fetch list of products
    const productsEndpoint = fetch("https://dummyjson.com/products");
    // Make HTTP request to fetch list of categories
    const categoryEndPoint = fetch("https://dummyjson.com/products/categories");

    // Use Promise.all to perform requests concurrently and wait for both to resolve
    Promise.all([productsEndpoint, categoryEndPoint])
      // the then method is called on the resulting promise, and the resolved values are passed as an argument to a function that maps over the values and returns a new array of promises that are resolved to the JSON representations of the responses
      .then((values) => Promise.all(values.map((value) => value.json())))
      // When all JSON data is available, update state variables and re-render component
      .then((mappedValues) => {
        setProducts(mappedValues[0].products.slice(0, 10));
        setCategories(mappedValues[1].slice(0, 5));
      });
  }, []);  // Empty dependency array means this effect only runs once, on initial render


  return (
    <section>
      <h1>Fetch med promise.all</h1>
      <ul>
        <li>
          <h2>Kategorier</h2>
          <ul>
            {categories.map((cat, i) => (
              <li key={i}>{cat}</li>
            ))}
          </ul>
        </li>
      </ul>
      <ul>
        <li>
          <h2>Produkter</h2>
          <ul>
            {products.map((prod, i) => (
              <li key={i}>{prod.title}</li>
            ))}
          </ul>
        </li>
      </ul>
    </section>
  );
};
