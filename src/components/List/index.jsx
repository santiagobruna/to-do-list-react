import myImage from "../../assets/edit.svg";
import mySecondImage from "../../assets/delete.svg";
import styles from "./list.module.scss";
const List = () => {
  return (
    <ul className={`${styles.list} d-flex align-items-center w-100 p-1 rounded`}>
      <li className="d-flex justify-content-between w-100">
        <span className="d-flex align-items-center">Estudar</span>
        <div className="d-flex align-items-center">
          <button className="btn">
            <img src={myImage} alt="Ícone de editar tarefa" />
          </button>
          <button className="btn">
            <img src={mySecondImage} alt="Ícone de deletar tarefa" />
          </button>
        </div>
      </li>
    </ul>
  );
};

export default List;
