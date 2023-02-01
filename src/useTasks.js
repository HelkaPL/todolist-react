import { useState, useEffect } from "react";

export const useTasks = () => {
      
    const [hideDone, setHideDone] = useState(false)

    const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
    }

    const defaultTasks = [
        { id: 1, content: 'Pierwsze zadanie, wciaz niewykonane', done: false },
        { id: 2, content: 'Drugie zadanie, już wykonane', done: true },
      ];

    const localeTasks = JSON.parse(localStorage.getItem("tasks"));
    
    const [tasks, setTasks] = useState(localeTasks || defaultTasks);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
      }, [tasks]);
    
    const removeTask = (id) => {
        setTasks(tasks => tasks.filter(task => task.id !== id))
    };

    const toggleTaskDone = (id) => {
        setTasks(task => task.map(task => {
        if (task.id === id) {
            return { ...task, done: !task.done };
        }
        return task;
        }));
    };

    const setAllTaskDone = () => {
        setTasks(task => task.map(task =>
            ({ ...task, done: true })
        ));
    };

    const addNewTask = (content) => {
        setTasks(tasks => [
            ...tasks,
            {
                content,
                done: false,
                id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
            }
        ]);
    };

    return {hideDone, toggleHideDone, tasks, removeTask, toggleTaskDone, setAllTaskDone, addNewTask};
};