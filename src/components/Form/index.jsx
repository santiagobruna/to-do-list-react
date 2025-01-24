import { useState } from "react";
import styles from "./form.module.scss";
const Form = ({onAddTask}) => {
  const [inputValue, setInputValue] = useState("");
  const [taskName, setTaskName] = useState(""); // Estado para o nome da tarefa
  const handleInputChange = (e) => {
    setTaskName(e.target.value); // Atualiza o nome da tarefa conforme o usuário digita
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTask(taskName); // Passa a tarefa para o componente pai
    setInputValue(""); // Limpa o campo após o envio
  }
  return (
    <form onSubmit={handleSubmit} className={`${styles.form} p-4 rounded mb-3`}>
      <div className="mb-3">
        <label htmlFor="task" className="form-label">
          Informe a sua tarefa :
        </label>
        <input
          value={taskName}
          onChange={handleInputChange}
          type="text"
          className="form-control"
          id="task"
          aria-describedby="taskHelp"
          placeholder="sua task"
        />
      </div>
      <button type="submit" className={`${styles.button} btn mb-5`}>
        Enviar
      </button>
    </form>
  );
};

export default Form;
