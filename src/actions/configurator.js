// ACTION TYPES
export const MODIFY_PIEZA =  "MODIFY_PIEZA"
export const INIT_FETCH = "INIT_FETCH"
export const FETCH_OK = "FETCH_OK"

// ACTION CREATORS
export function modify_pieza(pieza, item){
    return {
        type: MODIFY_PIEZA,
        payload: {
            pieza, item
        }
    }
}