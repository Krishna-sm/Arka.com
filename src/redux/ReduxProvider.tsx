"use client";
import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store' 
import LoadingComponent from '@/components/LoadingComponent';

const ReduxProvider = ({ children }: { children :React.ReactNode}) => {
  return (
      <Provider store={store} >
          {/* <PersistGate loading={<LoadingComponent/>}  persistor={persistor} > */}
            {children}
                {/* </PersistGate> */}
        </Provider>
  )
}

export default ReduxProvider