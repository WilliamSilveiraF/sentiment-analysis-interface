import { UploadResponse, AudioAnalysisState } from "./types";

export async function postUploadFile(file: File): Promise<UploadResponse> {
    const formData = new FormData();
    formData.append('file', file);
    
    const response = await fetch(`${process.env.REACT_APP_API_URL}/upload/`, {
        method: 'POST',
        body: formData,
    });

    return response.json()
}

export async function getAudioAnalysis(id: number): Promise<AudioAnalysisState> {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/audio/${id}`)
    
    return response.json()
}
