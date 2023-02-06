import { takeEvery, takeLatest, call, put, delay, select } from "redux-saga/effects";
import { getExampleTasks } from "./getExampleTasks";
import { exampleTasksError, exampleTasksSuccess, fetchExampleTasks, selectTasks } from "./taskSlice";
import { saveTasksInLocaleStorage } from "./tasksLocalStorage";


function* fetchExampleTasksHandler() {
    try {
        yield delay(4000);
        const exampleTasks = yield call(getExampleTasks);
        yield put(exampleTasksSuccess(exampleTasks));
    } catch (error) {
        yield put(exampleTasksError());
        yield call(alert, "UPS... Coś poszlo nie tak.");
    }
}

function* saveTasksInLocaleStorageHandler() {
    const tasks = yield select(selectTasks);
    yield call(saveTasksInLocaleStorage, tasks);
}

export function* tasksSaga() {
    yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
    yield takeEvery("*", saveTasksInLocaleStorageHandler);

}