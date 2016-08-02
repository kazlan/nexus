import { takeEvery } from 'redux-saga'
import { put, fork } from 'redux-saga/effects'
import { updateConfig } from '../actions/configurator'
import LZString from 'lz-string'


const fetchGithubUser = ()=>{
    return fetch('https://api.github.com/users/kazlan').then(res=>{
        return res.json().then(data=>{
            return data
        })
    })
}

//Worker sagas
function* fetchData(){
    const payload = yield fetchGithubUser()
    yield put({type: "FETCH_OK", payload})
}
function* localStorageSave({payload}){
    const encoded = LZString.compressToUTF16(JSON.stringify(payload))
    yield localStorage.setItem('NexusConfig', encoded)
        //console.log(LZString.compressToEncodedURIComponent(JSON.stringify(state.config)))
}
function* localStorageLoad(){
    const data = yield JSON.parse(LZString.decompressFromUTF16(localStorage.getItem('NexusConfig')))
    yield put(updateConfig(data))
}

//Watcher sagas
function* watchFetchData(){
    yield* takeEvery("INIT_FETCH",fetchData)
}
function* watchLocalStorageSave(){
    yield* takeEvery("LOCALSTORAGE_SAVE", localStorageSave)
}
function* watchLocalStorageLoad(){
    yield* takeEvery("LOCALSTORAGE_LOAD", localStorageLoad)    
}

//rootSaga
export default function* rootSaga(){
    yield [
        fork(watchFetchData),
        fork(watchLocalStorageSave),
        fork(watchLocalStorageLoad)
        //, otras Sagas que haya que lanzar
    ]
}