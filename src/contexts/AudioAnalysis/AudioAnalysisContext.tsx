import React, { useContext, useState } from "react";
import { useAction } from "../Action/ActionContext";
import { getAudioAnalysis, postUploadFile } from "./http";
import { AudioAnalysisProps, AudioAnalysisProviderProps, AudioAnalysisState } from './types'
import { useNavigate } from "react-router-dom";

const AudioAnalysisContext = React.createContext<AudioAnalysisProps | undefined>(undefined);

export function useAudioAnalysis() {
    const context = useContext(AudioAnalysisContext)
    if (!context) {
        throw new Error("useAudioAnalysis must be used within an AudioAnalysisProvider");
    }

    return context
}

const AudioAnalysisProvider: React.FC<AudioAnalysisProviderProps> = ({ children }) => {
    const navigate = useNavigate()
    const { setLoading } = useAction()
    const [audioAnalysis, setAudioAnalysis] = useState<AudioAnalysisState>({} as AudioAnalysisState)

    const fetchAudioAnalysis = async (id: number) => {
        setLoading(true)
        await getAudioAnalysis(id)
            .then (response => {
                setLoading(false)
                console.log('response', response)
                setAudioAnalysis(response)
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
                console.log('response', response)
                navigate(`/audio/${response.audio_id}`)
            })
            .catch(error => {
                setLoading(false)
                window.alert('There was an error uploading the file.')
                console.error(error)
            })
    }

    return <AudioAnalysisContext.Provider value={{
        saveAudioFile,
        fetchAudioAnalysis,
        audioAnalysis
    }}>
        {children}
    </AudioAnalysisContext.Provider>
}

export default AudioAnalysisProvider;
