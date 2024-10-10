"use client";
import {  configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { MobileNav } from "./slice/mobilenav.slice";  
  

export const store = configureStore({
    reducer: {
        [MobileNav.reducerPath]: MobileNav.reducer,
    },
    middleware:d=>d({
        // serializableCheck:false,

    })
})


setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>
 