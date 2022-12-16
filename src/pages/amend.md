```js
  const [apiData, setApiData] = useState([]);
  const [children, setChildren] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        data.children = children;
        setApiData(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [children]);
```