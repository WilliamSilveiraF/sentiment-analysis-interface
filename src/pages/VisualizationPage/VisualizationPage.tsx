import { useParams } from 'react-router-dom'
import './VisualizationPage.css'
import HorizontalGraph from '../../components/HorizontalGraph/HorizontalGraph'

const barData = [
    { value: 28.5, label: 'Positivo' },
    { value: 100, label: 'Neutro' },
    { value: 70, label: 'Negativo' },
]
export default function VisualizationPage() {
    const { id } =  useParams()
    
    return <div className='VisualizationPage'>
        <div className='VisualizationPage-container'>
            <h2 className="VisualizationPage-container-title">Arquivo - whatsapp.mp3</h2>
            <p className="VisualizationPage-container-description">Lorem ipsum dolor sit amet. Hic debitis distinctio et nemo aperiam ad dolores quas ut omnis esse. Non repudiandae obcaecati est illum perspiciatis aut excepturi enim. Cum nisi quia et asperiores porro eum debitis aliquam est laborum iusto At dignissimos esse? Vel quis eveniet ut accusamus quam id incidunt rerum.</p>
            <HorizontalGraph data={barData} />
            <p className="VisualizationPage-container-description">Sumário: </p>
            <p className="VisualizationPage-container-description"> Lorem ipsum dolor sit amet. Hic debitis distinctio et nemo aperiam ad dolores quas ut omnis esse. Non repudiandae obcaecati est illum perspiciatis aut excepturi enim. Cum nisi quia et asperiores porro eum debitis aliquam est laborum iusto At dignissimos esse? Vel quis eveniet ut accusamus quam id incidunt rerum.</p>
        </div>
        
    </div>
}