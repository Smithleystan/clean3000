import { createSlice } from "@reduxjs/toolkit";

let initialState

localStorage.getItem('avis')? initialState = JSON.parse(localStorage.getItem('avis')) : initialState = []

export const avis = createSlice({
    name :"avis",
    initialState,
    reducers : {
        add : (state, {payload})=>{
            state.push({
                id : Date.now(),
                nom : payload.nom,
                date : new Date().toLocaleDateString(),
                observation : payload.observation
            })

            localStorage.setItem("avis", JSON.stringify(state))
        }

    }
})


export const {add} = avis.actions
export default avis.reducer