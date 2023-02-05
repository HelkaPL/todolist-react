import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice ({
    name: 'tasks',
    initialState: {
        tasks: [
            { id: 1, content: 'Redux store, wciaz niewykonane', done: false },
            { id: 2, content: 'Drugie zadanie, już wykonane', done: true },
          ],
        hideDone: false,
    },
    reducers: {
        addTask: ({ tasks }, { payload }) => {
            tasks.push(payload);
        },
        toggleHideDone: state => {
            state.hideDone = !state.hideDone;
        },
        toggleTaskDone: ({ tasks }, {payload}) => {
            const index = tasks.findIndex(({ id }) => id === payload);
            tasks[index].done = !tasks[index].done;
        },
        removeTask: ({ tasks }, {payload}) => {
            const index = tasks.findIndex(({ id }) => id === payload);
            tasks.splice(index, 1)
        },
        setAllTaskDone: ({ tasks }) => {
            tasks.forEach(task => task.done = true);
        },
    },
});

export const { addTask, toggleHideDone, toggleTaskDone, removeTask, setAllTaskDone } = tasksSlice.actions;
export const selectTasks = state => state.tasks;
export default tasksSlice.reducer;