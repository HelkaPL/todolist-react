import { takeEvery, call, put } from "redux-saga/effects";
import { getExampleTasks } from "./getExampleTasks";
import { fetchExampleTasks, setExampleTasks } from "./taskSlice";


function* fetchExampleTasksHandler() {
    try {
        const exampleTasks = yield call(getExampleTasks)
        yield put(setExampleTasks(exampleTasks));
    } catch (error){
        yield call(alert, "UPS... Coś poszlo nie tak.")
    }
}


 export function* watchFetchExampleTasks() {
    yield takeEvery(fetchExampleTasks.type, fetchExampleTasksHandler)

}