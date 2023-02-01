import { useState, useRef } from "react";
import { Box, Content, Button } from "./styled"

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const inputRef = useRef(null);

    const focusInput = () => {
        inputRef.current.focus();
    };

    const onFormSubmit = e => {
        e.preventDefault();
        if(newTaskContent.trim() === ""){ return }
        addNewTask(newTaskContent.trim());
        setNewTaskContent("");
        focusInput();        
    };

    return (
    <Box onSubmit={onFormSubmit}>
        <Content 
            value={newTaskContent}
            onChange={e => setNewTaskContent(e.target.value)}
            placeholder="Co jest do zrobienia?"
            ref={inputRef}
            >    
        </Content>
        <Button>
            Dodaj zadanie
        </Button>
    </Box>
    );
};

export default Form;