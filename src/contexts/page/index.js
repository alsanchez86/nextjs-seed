import React, { useContext } from "react";
import getConfig from "next/config";
import ContextDevTool from "react-context-devtool";

const { publicRuntimeConfig } = getConfig();
const StateContext = React.createContext({});

export const usePageContextState = () => useContext(StateContext);
export const PageContext = ({ children, value }) => {
    return (
        <StateContext.Provider value={value}>
            {publicRuntimeConfig?.dev && (<ContextDevTool context={StateContext} id="page-context" displayName="Page context" />)}
            {children}
        </StateContext.Provider>
    );
}