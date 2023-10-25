import React, { useContext, useState } from "react";
import api from "../helpers/api";
import { AxiosResponse } from "axios";
import LoadingPage from "../pages/LoadingPage/LoadingPage";

interface ActionProps {
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ActionProviderProps {
    children: React.ReactNode;
}

const ActionContext = React.createContext<ActionProps | undefined>(undefined);

export function useAction() {
    const context = useContext(ActionContext)

    if (!context) {
        throw new Error("useAction must be used within an ActionProvider");
    }

    return context
}

const ActionProvider: React.FC<ActionProviderProps> = ({ children }) => {
    const [loading, setLoading] = useState(false)
    
    return <ActionContext.Provider value={{
        loading: loading,
        setLoading: setLoading
    }}>
        { loading ? <LoadingPage /> : null }
        {children}
    </ActionContext.Provider>
}

export default ActionProvider;




