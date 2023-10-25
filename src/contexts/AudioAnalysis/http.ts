import { UploadResponse, AudioAnalysisState } from "./types";

export async function postUploadFile(file: File): Promise<UploadResponse> {
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch('http://localhost:8000/upload/', {
        method: 'POST',
        body: formData,
    });

    return response.json()
}

export async function getAudioAnalysis(id: number): Promise<AudioAnalysisState> {
    const response = await fetch(`http://localhost:8000/audio/${id}`)
    
    return response.json()
}
