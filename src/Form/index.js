import "./style.css";

const Form = () => (
    <form className="taskForm">
        <input type="text" className="taskForm__taskContent" placeholder="Co jest do zrobienia?" autoFocus />
        <input type="submit" className="taskForm__button" value="Dodaj zadanie" />
    </form>
)

export default Form;