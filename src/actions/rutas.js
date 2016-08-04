export const DECODE_ROUTE_PARAM = "DECODE_ROUTE_PARAM"
export const ENCODE_ROUTE_PARAM = "ENCODE_ROUTE_PARAM"

export function encodeRouteParam(config){
    return {
        type: ENCODE_ROUTE_PARAM,
        payload: config
    }
}
export function decodeRouteParam(str){
    return {
        type: DECODE_ROUTE_PARAM,
        payload: str
    }
}