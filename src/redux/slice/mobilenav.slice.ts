
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store"; 

export const MobileNav = createSlice({
    name:'mobilenav',
    initialState:{
                               
        isOpen: false
    },
    reducers:{
        toggleNav:(state,action)=>{
            state.isOpen = !state.isOpen

            // localStorage.setItem("isOpen", JSON.stringify(state.isOpen))
        },
        closeNav: (state, action) => {
            state.isOpen = false

            // localStorage.setItem("isOpen", JSON.stringify(state.isOpen))
        }
    }

})

export const { toggleNav, closeNav } = MobileNav.actions


export const MobileNavSelector = (state: RootState) => state.mobilenav