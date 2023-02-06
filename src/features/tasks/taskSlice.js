import { createSlice } from "@reduxjs/toolkit";
import { getTasksFromLocaleStorage } from "./tasksLocalStorage";

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: getTasksFromLocaleStorage().tasks,
        hideDone: getTasksFromLocaleStorage().hideDone || false,
    },
    reducers: {
        addTask: ({ tasks }, { payload }) => {
            tasks.push(payload);
        },
        toggleHideDone: state => {
            state.hideDone = !state.hideDone;
        },
        toggleTaskDone: ({ tasks }, { payload }) => {
            const index = tasks.findIndex(({ id }) => id === payload);
            tasks[index].done = !tasks[index].done;
        },
        removeTask: ({ tasks }, { payload }) => {
            const index = tasks.findIndex(({ id }) => id === payload);
            tasks.splice(index, 1)
        },
        setAllTaskDone: ({ tasks }) => {
            tasks.forEach(task => task.done = true);
        },
        fetchExampleTasks: () => { },
        setExampleTasks: (state, { payload: tasks }) => {
            state.tasks = tasks;
        }
    },
});

export const { addTask, toggleHideDone, toggleTaskDone, removeTask, setAllTaskDone, fetchExampleTasks, setExampleTasks } = tasksSlice.actions;

export const selectTasks = state => state.tasks;

export default tasksSlice.reducer;