import { takeEvery, takeLatest, call, put, delay, select } from "redux-saga/effects";
import { getExampleTasks } from "./getExampleTasks";
import { fetchExampleTasks, selectTasks, setExampleTasks } from "./taskSlice";
import { saveTasksInLocaleStorage } from "./tasksLocalStorage";


function* fetchExampleTasksHandler() {
    try {
        yield delay(2000);
        const exampleTasks = yield call(getExampleTasks)
        yield put(setExampleTasks(exampleTasks));
    } catch (error) {
        yield call(alert, "UPS... Coś poszlo nie tak.")
    }
}

function* saveTasksInLocaleStorageHandler() {
    const tasks = yield select(selectTasks);
    yield call(saveTasksInLocaleStorage, tasks);
}

export function* tasksSaga() {
    yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler)
    yield takeEvery("*", saveTasksInLocaleStorageHandler)

}