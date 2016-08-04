import { takeEvery, takeLatest } from 'redux-saga'
import { put, fork } from 'redux-saga/effects'
import { updateConfig } from '../actions'
import { browserHistory } from 'react-router'

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

//LOCAL STORAGE
//   notas: Quito temporalmente el encriptamiento, parece dar problemas 
//           fuera del entorno local
function* localStorageSave({payload}){
    yield localStorage.setItem('NexusConfig', JSON.stringify(payload))
}
function* localStorageLoad(){
    const item = yield localStorage.getItem('NexusConfig')
    if ( item ){
    const data = yield JSON.parse(localStorage.getItem('NexusConfig'))
    yield put(updateConfig(data))
    }
}

//ENCODE DECODE PARAM
function decode(str){
    const data = JSON.parse(LZString.decompressFromEncodedURIComponent(str))
    return data?data:"error"
}
function encode(obj){
    return LZString.compressToEncodedURIComponent(JSON.stringify(obj))
}
function* encodeRouteParam(config){
    const data = yield encode(config)
    //PUSH_ROUTE_PARAM
    browserHistory.push('/'+ data)
}
function* decodeRouteParam({payload}){
    const data = yield decode(payload)
    if (data.payload !== "error"){
        yield put(updateConfig(data.payload))
    }else{
        console.log('decoded pero no entendible')
    }
}

//Watcher sagas
function* watchFetchData(){
    yield* takeEvery("INIT_FETCH",fetchData)
}
function* watchLocalStorageSave(){
    yield* takeEvery("LOCALSTORAGE_SAVE", localStorageSave )
}
function* watchLocalStorageLoad(){
    yield* takeEvery("LOCALSTORAGE_LOAD", localStorageLoad )    
}
function* watchEncodeRouteParam(){
    yield* takeLatest("ENCODE_ROUTE_PARAM", encodeRouteParam )
}
function* watchDecodeRouteParam(){
    yield* takeLatest("DECODE_ROUTE_PARAM", decodeRouteParam )
}
//rootSaga
export default function* rootSaga(){
    yield [
        fork(watchFetchData),
        fork(watchLocalStorageSave),
        fork(watchLocalStorageLoad),
        fork(watchEncodeRouteParam),
        fork(watchDecodeRouteParam)
    ]
}