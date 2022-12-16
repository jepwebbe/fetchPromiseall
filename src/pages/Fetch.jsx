import { useEffect, useState } from "react";

const URL = "https://dummyjson.com/products?limit=10";

const Fetch = () => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setApiData(data.products);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <ul>
      <h1>Produkter</h1>
      {apiData.map((item, i) => (
        <li key={i}>{item.title}</li>
      ))}
    </ul>
  );
};

export default Fetch;
