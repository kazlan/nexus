// ACTION TYPES
export const MODIFY_PIEZA =  "MODIFY_PIEZA"

// ACTION CREATORS
export function modify_pieza(pieza, item){
    return {
        type: MODIFY_PIEZA,
        payload: {
            pieza, item
        }
    }
}