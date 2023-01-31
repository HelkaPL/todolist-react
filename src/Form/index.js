import { useState } from "react";
import { Box, Content, Button } from "./styled"

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");    
    
    const onFormSubmit = e => {
        e.preventDefault();
        if(newTaskContent.trim() === ""){ return }
        addNewTask(newTaskContent.trim());
        setNewTaskContent("")        
    }

    return (
    <Box onSubmit={onFormSubmit}
    >
        <Content 
            value={newTaskContent}
            onChange={e => setNewTaskContent(e.target.value)}
            placeholder="Co jest do zrobienia?"
            autoFocus>    
        </Content>
        <Button>
            Dodaj zadanie
        </Button>
    </Box>
    )
};

export default Form;