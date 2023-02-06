import { nanoid } from "@reduxjs/toolkit";
import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../taskSlice";
import Input from "../Input";
import { Box, Button } from "./styled"


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
        <Input 
            value={newTaskContent}
            onChange={e => setNewTaskContent(e.target.value)}
            placeholder="Co jest do zrobienia?"
            ref={inputRef}
            >    
        </Input>
        <Button>
            Dodaj zadanie
        </Button>
    </Box>
    );
};

export default Form;