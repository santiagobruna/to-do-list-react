import { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";

function App() {
  return (
    <div className="container">
      <h1>Lista de Tarefas</h1>
      <Form/>
      <List/>
    </div>
  );
}

export default App;
