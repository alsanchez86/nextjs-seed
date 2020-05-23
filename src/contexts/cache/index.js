import React, { useReducer, useContext } from "react";
import getConfig from "next/config";
import reducer from "./reducer";
import ContextDevTool from "react-context-devtool";
import { createState } from "./utils";

const { publicRuntimeConfig } = getConfig();
const StateContext = React.createContext();
const DispatchContext = React.createContext();

export const useCacheContextState = () => useContext(StateContext);
export const useCacheContextDispatch = () => useContext(DispatchContext);
export const CacheContext = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, createState());

    return (
        <DispatchContext.Provider value={dispatch}>
            <StateContext.Provider value={state}>
                {publicRuntimeConfig?.dev && (<ContextDevTool context={StateContext} id="cache-context" displayName="Cache context" />)}
                {children}
            </StateContext.Provider>
        </DispatchContext.Provider>
    );
}