import React from "react";

export default function Greet({ name }) {
  if (name) return <h1>Hello, {name}</h1>;

  return (
    <>
      <h1>Hello World</h1>
      <button>Click Me</button>
    </>
  );
}
