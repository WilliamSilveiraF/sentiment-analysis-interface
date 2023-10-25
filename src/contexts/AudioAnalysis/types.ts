export interface AudioAnalysisProps {
    saveAudioFile: Function;
    fetchAudioAnalysis: (id: number) => void;
    audioAnalysis: AudioAnalysisState;
}

export interface AudioAnalysisProviderProps {
    children: React.ReactNode;
}

export interface UploadResponse {
    audio_id: number;
    message: string;
}

export interface AudioAnalysisState {
    filename: string;
    summary: string;
    transcription: string;
    negative_score: number;
    neutral_score: number;
    positive_score: number;
}