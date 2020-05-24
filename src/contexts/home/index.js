import React, { useReducer, useContext } from "react";
import getConfig from "next/config";
import reducer from "./reducer";
import ContextDevTool from "react-context-devtool";
import { createState } from "./utils";

const { publicRuntimeConfig } = getConfig();
const StateContext = React.createContext();
const DispatchContext = React.createContext();

export const useHomeContextState = () => useContext(StateContext);
export const useHomeContextDispatch = () => useContext(DispatchContext);
export const HomeContext = ({ children, value }) => {
    const [state, dispatch] = useReducer(reducer, createState(value));

    console.log("home context");

    return (
        <DispatchContext.Provider value={dispatch}>
            <StateContext.Provider value={state}>
                {publicRuntimeConfig?.dev && (<ContextDevTool context={StateContext} id="home-context" displayName="Home context" />)}
                {children}
            </StateContext.Provider>
        </DispatchContext.Provider>
    );
}