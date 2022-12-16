import React, { useEffect, useState } from "react";

export const PromiseAll = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const productsEndpoint = fetch("https://dummyjson.com/products");
    const categoryEndPoint = fetch("https://dummyjson.com/products/categories");

    Promise.all([productsEndpoint, categoryEndPoint])
      .then((values) => Promise.all(values.map((value) => value.json())))
      .then((mappedValues) => {
        setProducts(mappedValues[0].products.slice(0, 10));
        setCategories(mappedValues[1].slice(0, 5));
      });
  }, []);

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
