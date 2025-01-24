import myImage from "../../assets/edit.svg";
import mySecondImage from "../../assets/delete.svg";
import styles from "./list.module.scss";
const List = ({tasks, onDelete, onEdit}) => {
  const handleEdit = (task) => {
    const newTaskName = prompt("Edite a tarefa:", task.name);
    if (newTaskName) {
      onEdit(task.id, newTaskName);
    }
  }
  return (
    <ul className={`${styles.list} d-flex flex-column align-items-center w-100 p-1 rounded`}>
      {/* Aqui renderizamos as tarefas */}
      {tasks.map((task, index) => (
          <li key={index} className="d-flex rounded p-2 justify-content-between w-100">
          <span className="d-flex align-items-center">{task.name}</span>
          <div className="d-flex align-items-center">
            <button onClick={() => handleEdit(task)} className="btn">
              <img src={myImage} alt="Ícone de editar tarefa" />
            </button>
            <button onClick={() => onDelete(task.id)} className="btn">
              <img src={mySecondImage} alt="Ícone de deletar tarefa" />
            </button>
          </div>
        </li>
      ))}
      
    </ul>
  );
};

export default List;
