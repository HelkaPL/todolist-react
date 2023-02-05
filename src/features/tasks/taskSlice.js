import { createSlice, nanoid } from "@reduxjs/toolkit";

const tasksSlice = createSlice ({
    name: 'tasks',
    initialState: {
        tasks: [
            { id: nanoid, content: 'Pierwsze zadanie, wciaz niewykonane', done: false },
            { id: nanoid, content: 'Drugie zadanie, już wykonane', done: true },
          ],
    },
    reducers: {
        addTask: ({ tasks }, { payload }) => {
            tasks.push(payload);
        },
    },
});

export const { addTask } = tasksSlice.actions;
export const selectTasks = state => state.tasks;
export default tasksSlice.reducer;