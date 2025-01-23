import styles from "./form.module.scss";
const Form = () => {
  return (
    <form className={`${styles.form} p-4 rounded mb-3`}>
      <div className="mb-3">
        <label htmlFor="task" className="form-label">
          Informe a sua tarefa :
        </label>
        <input
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
