import type from "./type"

const initialState = {
    table: {
        numberActivate: 1,
        rangeTeeth: [],
        isMax: false,
        isMin: true,
        Tasks: [],
    },
    filter: "",
    count: 0,

}


export default function TaskReducer(state = initialState, action) {

    switch (action.type) {

        case type.SET_FILTER_TASKS:
            const {table,filter}=action.payload
            return { ...state, table: { ...state.table, ...table }, filter}
            
        default:
            return state
    }
}
