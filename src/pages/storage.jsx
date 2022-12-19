import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid"

const storage = () => {
  // localStorage er altid en string, så når man gemmer skal det stringify'es
  const storageStr = "myState";
  const userObj = {id: uuidv4(), username: "", email: "" }
  const initialStorage = localStorage.getItem(storageStr)
    ? JSON.parse(localStorage.getItem(storageStr))
    : [];
  const [state, setState] = useState(userObj);
  const [users, setUsers] = useState(initialStorage);

  console.log("state", state);

const onHandleChange = () => {}

const {id, username, email } = state
  return (
  <form action="">
    <input type="text" value={id} name="id" readOnly/>
    <input type="text" value={username} name="username" onChange={onHandleChange} />
    <input type="text" value={email} name="email" onChange={onHandleChange}/>
  </form>)
};

export default storage;
