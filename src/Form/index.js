import { useState } from "react";
import "./style.css";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");    
    
    const onFormSubmit = e => {
        e.preventDefault();
        if(newTaskContent.trim() === ""){ return }
        addNewTask(newTaskContent.trim());
        setNewTaskContent("")        
    }

    return (
    <form className="taskForm" onSubmit={onFormSubmit}>
        <input 
            type="text"
            className="taskForm__taskContent"
            value={newTaskContent}
            onChange={e => setNewTaskContent(e.target.value)}
            placeholder="Co jest do zrobienia?"
            autoFocus
        />
        <input type="submit" className="taskForm__button" value="Dodaj zadanie" />
    </form>
    )
};

export default Form;