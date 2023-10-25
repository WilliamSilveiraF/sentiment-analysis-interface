export interface AudioAnalysisProps {
    saveAudioFile: Function;
    fetchAudioAnalysis: (id: number) => void;
}

export interface AudioAnalysisProviderProps {
    children: React.ReactNode;
}