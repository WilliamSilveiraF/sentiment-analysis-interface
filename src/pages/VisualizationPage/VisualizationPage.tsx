import { useParams } from 'react-router-dom'
import './VisualizationPage.css'
import HorizontalGraph from '../../components/HorizontalGraph/HorizontalGraph'
import { useAudioAnalysis } from '../../contexts/AudioAnalysis/AudioAnalysisContext'
import { useEffect } from 'react'

export default function VisualizationPage() {
    const { id } =  useParams()
    const { fetchAudioAnalysis, audioAnalysis } = useAudioAnalysis()

    useEffect(() => {
        fetchAudioAnalysis(Number(id))
    }, [])

    console.log('audioAnalysis', audioAnalysis)

    return <div className='VisualizationPage'>
        <div className='VisualizationPage-container'>
            <h2 className="VisualizationPage-container-title">{audioAnalysis.filename}</h2>
            <p className="VisualizationPage-container-description">{audioAnalysis.transcription}</p>
            <HorizontalGraph 
                data={[
                    { value: audioAnalysis.positive_score * 100, label: 'Positive' },
                    { value: audioAnalysis.neutral_score * 100, label: 'Neutral' },
                    { value: audioAnalysis.negative_score * 100, label: 'Negative' },
                ]}
            />
            <p className="VisualizationPage-container-description">Summary: </p>
            <p className="VisualizationPage-container-description">{audioAnalysis.summary}</p>
        </div>
        
    </div>
}