import { useState, useEffect } from "react";
import Form from "./components/Form";
import List from "./components/List";

function App() {
  const [tasks, setTasks] = useState([]);
  // useEffect para carregar as tarefas do localStorage
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")); // Tenta carregar as tarefas salvas
    if (savedTasks) {
      setTasks(savedTasks); // Se existirem tarefas, atualiza o estado
    }
  }, []); // Esse efeito será chamado apenas uma vez quando o componente for montado

  // useEffect para salvar as tarefas no localStorage sempre que o estado mudar
  useEffect(() => {
    if (tasks.length > 0) { // Se houver tarefas no estado
      localStorage.setItem("tasks", JSON.stringify(tasks)); // Salva as tarefas no localStorage
    }
  }, [tasks]); // Esse efeito será chamado sempre que as tarefas mudarem

  const handleAddTask = (taskName) => {
    const newTask = { id: Date.now(), name: taskName };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };
  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };
  const handleEditTask = (taskId, newTaskName) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, name: newTaskName } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <h1>Lista de Tarefas</h1>
      <Form onAddTask={handleAddTask} />
      <List tasks={tasks} onDelete={handleDeleteTask} onEdit={handleEditTask} />
    </div>
  );
}

export default App;
