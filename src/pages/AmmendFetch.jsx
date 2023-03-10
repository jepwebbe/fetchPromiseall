import { useEffect, useState } from "react";

import { v4 as uuidv4 } from "uuid";
import { StyledDiv } from "./StyledDiv";
import { StyledRadio } from "./StyledRadioButton";

import markdownd from "./amend.md";
import Markdown from "../components/Markdown";

const URL = "https://dummyjson.com/users/7";

const AmmendFetch = () => {
  const initialValue = { id: uuidv4(), name: "", gender: "", age: "" };
  const [apiData, setApiData] = useState([]);
  const [children, setChildren] = useState([]);
  const [md, setMd] = useState("");

  const [inputVal, setInputVal] = useState(initialValue);

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        data.transport = "Toyota"
        data.children = children;
        console.log(data);
        setApiData(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [children]);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setInputVal((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    fetch(markdownd)
      .then((response) => response.text())
      .then((text) => {
        setMd(text);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("e ", e);
    setChildren((prev) => [...prev, inputVal]);

    setInputVal(initialValue);
  };

  const { name, gender, age } = inputVal;

  return (
    <StyledDiv>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <div>
            <label htmlFor="name">Navn</label>
            <input type="text" name="name" id="name" value={name} onChange={handleChange} />
          </div>

          <div>
            <StyledRadio htmlFor="female">
              Kvinde
              <input type="radio" name="gender" checked={gender === "female"} id="female" value="female" onChange={handleChange} />
              <span className="checkmark"></span>
            </StyledRadio>
          </div>
          <div>
            <StyledRadio htmlFor="male">
              mand
              <input type="radio" name="gender" checked={gender === "male"} id="male" value="male" onChange={handleChange} />
              <span className="checkmark"></span>
            </StyledRadio>
          </div>

          <div>
            <label htmlFor="age">Alder</label>
            <input type="number" name="age" id="age" value={age} onChange={handleChange} />
          </div>
          <div>
            <button type="submit">Tilf??j</button>
          </div>
        </fieldset>
      </form>
      <article>
        <p>
          Det Api endpoint vi har brugt er uden et childrens array. Man kunne forstille sig at to endpoints skulle merges til et, dette er mugligt ved
          at tilf??je det inden man sender responsen til state. i dette tilf??lde tilf??jer vi children til state, tilf??jer denne state til vores
          response inden vi sender den til state, vi lytter efter ??ndringer og kan derefter loope igennem de unger der er tilf??jet. som det ses
          herunder tilf??jer vi data.children, den findes ikke i endpoint, vi giver den v??rdien af den state der hedder children. vi har nu merget to
          datas??t. <br />
          <br /> Vi kunne ha brugt denne fremgangsmetode ved den opgave vi havde med Hotel Overlook. vi kunne have lavet vores eget datas??t hvor de
          enkelte hoteller indeholder deres respektive v??relser. s?? de var i state til senere brug
        </p>
        <br />
        <Markdown md={md} />
        <ul>
          <li>
            <span>Navn: </span>
            {apiData.firstName + " " + apiData.lastName}
          </li>
          <li>
            <span>Alder: </span>
            {apiData.age} ??r
          </li>
          <li>
            <span>E-mail: </span>
            {apiData.email}
          </li>
          <li>
            <span>Universitet: </span>
            {apiData.university}
          </li>
          <li>
            <span>V??gt: </span>
            {apiData.weight} kg
          </li>

          <li>
            <br />
            <h3> B??rn der tilf??jet </h3>

            <Component data={apiData} />
          </li>
        </ul>
      </article>
    </StyledDiv>
  );
};

export default AmmendFetch;

const Component = ({ data }) => {
  return (
    <ul>
      {data.children !== undefined &&
        data.children.map((kid, i) => (
          <li key={i}>
            {kid.name} en {kid.gender === "male" ? "mand" : "kvinde"} p?? {kid.age} ??r
          </li>
        ))}
    </ul>
  );
};
