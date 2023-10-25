import React, { useContext, useState } from "react";
import api from "../../helpers/api";
import { AxiosResponse } from "axios";
import { useAction } from "../Action/ActionContext";
import { getAudioAnalysis, postUploadFile } from "./http";
import { AudioAnalysisProps, AudioAnalysisProviderProps } from './types'

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

    const fetchAudioAnalysis = async (id: number) => {
        setLoading(true)
        await getAudioAnalysis(id)
            .then (response => {
                setLoading(false)
                console.log('response', response)
            })
            .catch(error => {
                setLoading(false)
                window.alert('There was an error fetching the audio.')
                console.error(error)
            })
    }

    const saveAudioFile = async (file: File) => {
        setLoading(true)
        await postUploadFile(file)
            .then(response => {
                setLoading(false)
                console.log('response', response)
            })
            .catch(error => {
                setLoading(false)
                window.alert('There was an error uploading the file.')
                console.error(error)
            })
    }

    return <AudioAnalysisContext.Provider value={{
        saveAudioFile,
        fetchAudioAnalysis
    }}>
        {children}
    </AudioAnalysisContext.Provider>
}

export default AudioAnalysisProvider;
