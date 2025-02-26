import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasksList: [
        {
            titulo: 'Tarea por defecto REDUX',
            responsable: 'Responsable por defecto REDUX',
            activo: true
        }
    ]
}

const tasksSlice = createSlice({
    name: "tareas",
    initialState,
    reducers: {
       addTask: ( state, action ) => {
         // action.payload
         state.tasksList.push(action.payload)
       },
       changeStatus: (state, action ) => {
          state.tasksList.map( ( task, index ) => {
            if( index == action.payload ) task.activo = !task.activo
            return task
            //return ( index == action.payload )? { ...task, activo: !task.activo}: task
          })
       }
    }
})

export const { addTask, changeStatus } = tasksSlice.actions
export default tasksSlice.reducer