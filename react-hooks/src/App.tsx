import React, { ChangeEvent, FormEvent, useState } from "react";
import "./App.css";

function App() {
  const [name, addName] = useState("");
  const [age, addAge] = useState("");
  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
  };
  const handleInput =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (event: ChangeEvent<HTMLInputElement>) => {
      setter(event.target.value);
    };
  return (
    <>
      <h1>Name: {name}</h1>
      <h1>Age: {age}</h1>
      <form onSubmit={handleSubmit}>
        <label className="form-label" htmlFor="name">
          Name:
        </label>
        <input
          className="form-control"
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleInput(addName)}
        />
        <label className="form-label" htmlFor="age">
          Age:
        </label>
        <input
          className="form-control"
          type="number"
          id="age"
          name="age"
          value={age}
          onChange={handleInput(addAge)}
        />
        <input className="form-control" type="submit" value="submit" />
      </form>
    </>
  );
}
export default App;