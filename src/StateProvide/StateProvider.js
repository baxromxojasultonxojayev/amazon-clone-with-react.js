import React, { createContext, useContext, useReducer } from 'react'


// Data LAYER
export const StateContext = createContext()


// Making Provider
export const StateProvider =({ reducer, initialState, children })=> (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children }
  </StateContext.Provider>
)

// Using inside of component

export const useStateValue = () => useContext(StateContext)