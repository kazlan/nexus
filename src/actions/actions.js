// ACTION TYPES
export const MODIFY_PIEZA =  "MODIFY_PIEZA"
export const INIT_FETCH = "INIT_FETCH"
export const FETCH_OK = "FETCH_OK"
export const LOCALSTORAGE_SAVE = "LOCALSTORAGE_SAVE"
export const LOCALSTORAGE_LOAD = "LOCALSTORAGE_LOAD"
export const UPDATE_CONFIG = "UPDATE_CONFIG"

// ACTION CREATORS
export function modify_pieza(pieza, item){
    return {
        type: MODIFY_PIEZA,
        payload: {
            pieza, item
        }
    }
}

export function updateConfig(data){
    return {type: UPDATE_CONFIG, payload: data}
}
export function localStorageSave(config){
    return {type: LOCALSTORAGE_SAVE ,payload: config}
}
export function localStorageLoad(){
    return {type: LOCALSTORAGE_LOAD}
}
