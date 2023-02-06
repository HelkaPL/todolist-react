import { createSlice } from "@reduxjs/toolkit";
import { getTasksFromLocaleStorage } from "./tasksLocalStorage";

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: getTasksFromLocaleStorage().tasks || [],
        hideDone: getTasksFromLocaleStorage().hideDone || false,
    },
    reducers: {
        addTask: ({ tasks }, { payload }) => {
            tasks.push(payload);
        },
        toggleHideDone: state => {
            state.hideDone = !state.hideDone;
        },
        toggleTaskDone: ({ tasks }, { payload: taskId }) => {
            const index = tasks.findIndex(({ id }) => id === taskId);
            tasks[index].done = !tasks[index].done;
        },
        removeTask: ({ tasks }, { payload: taskId }) => {
            const index = tasks.findIndex(({ id }) => id === taskId);
            tasks.splice(index, 1)
        },
        setAllTaskDone: ({ tasks }) => {
            tasks.forEach(task => task.done = true);
        },
        fetchExampleTasks: (state) => {
            state.loading = true;
        },
        exampleTasksSuccess: (state, {payload: tasks}) => {
            state.tasks = tasks;
            state.loading = false;
        },
        exampleTasksError: (state) => {
            state.loading = false;
        },
        setExampleTasks: (state, { payload: tasks }) => {
            state.tasks = tasks;
            state.loading = false;
        },
    },
});

export const { 
    addTask,
    toggleHideDone,
    toggleTaskDone,
    removeTask,
    setAllTaskDone,
    fetchExampleTasks,
    setExampleTasks,
    exampleTasksSuccess,
    exampleTasksError
} = tasksSlice.actions;

const selectTasksState = state => state.tasks;

export const selectTasks = state => state.tasks;
export const selectTask = state => selectTasksState(state).tasks;
export const selectLoading = state => selectTasks(state).loading;

export const getTaskById = (state, taskId) =>
selectTask(state).find(({ id }) => id === taskId);

export default tasksSlice.reducer;