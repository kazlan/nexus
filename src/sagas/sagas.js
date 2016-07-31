import { takeEvery, delay } from 'redux-saga'
import { put } from 'redux-saga/effects'

//Worker sagas
export function* fetchData(){
    yield delay(1000)
    yield put({type: "FETCH_OK"})
}

//Watcher sagas
export function* watchFetchData(){
    yield* takeEvery("INIT_FETCH",fetchData)
}

//rootSaga
export default function* rootSaga(){
    yield [
        watchFetchData()
        //, otras Sagas que haya que lanzar
    ]
}