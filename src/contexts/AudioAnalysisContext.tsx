import React, { useContext, useState } from "react";
import api from "../helpers/api";
import { AxiosResponse } from "axios";
import { useAction } from "./ActionContext";

interface AudioAnalysisProps {
    saveAudioFile: Function;
}

interface AudioAnalysisProviderProps {
    children: React.ReactNode;
}

const AudioAnalysisContext = React.createContext<AudioAnalysisProps | undefined>(undefined);

export function useAudioAnalysis() {
    const context = useContext(AudioAnalysisContext)
    if (!context) {
        throw new Error("useAudioAnalysis must be used within an AudioAnalysisProvider");
    }

    return context
}

const AudioAnalysisProvider: React.FC<AudioAnalysisProviderProps> = ({ children }) => {
    const { setLoading } = useAction()

    const saveAudioFile = async (file: File) => {
        setLoading(true)
        await postUploadFile(file)
            .then(response => {
                setLoading(false)
                console.log('response', response)
                
            })
            .catch(error => {
                setLoading(false)
                console.error('There was an error uploading the file.', error)
            })
    }

    return <AudioAnalysisContext.Provider value={{
        saveAudioFile: saveAudioFile,
    }}>
        {children}
    </AudioAnalysisContext.Provider>
}

export default AudioAnalysisProvider;

async function postUploadFile(file: File): Promise<Response> {
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch('http://localhost:8000/upload/', {
        method: 'POST',
        body: formData,
    });
    return response.json()
    
}



