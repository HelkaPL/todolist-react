import { nanoid } from "@reduxjs/toolkit";
import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../taskSlice";
import { Box, Content, Button } from "./styled"

const Form = () => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const inputRef = useRef(null);

    const dispatch = useDispatch();

    const focusInput = () => {
        inputRef.current.focus();
    };

    const onFormSubmit = e => {
        e.preventDefault();
        if(newTaskContent.trim() === ""){ return }
        dispatch(addTask({
            content: newTaskContent.trim(),
            done: false,
            id: nanoid(),
        }));
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