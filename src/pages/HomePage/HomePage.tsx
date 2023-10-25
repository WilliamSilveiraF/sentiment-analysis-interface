import { useAudioAnalysis } from '../../contexts/AudioAnalysisContext'
import './HomePage.css'
import React, { useRef } from "react"


export default function HomePage() {
    const { saveAudioFile } = useAudioAnalysis()
    const fileInputRef = useRef<HTMLInputElement>(null)

    const handleUploadClick = () => {
      if (fileInputRef.current) {
        fileInputRef.current.click()
      }
    }
  
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.files && event.target.files.length > 0) {
        const file = event.target.files[0]
        
        if (file.type.startsWith('audio/')) {
          saveAudioFile(file)
        } else {
          console.error('Please select an audio file')
        }
      } else {
        console.error('No file selected')
      }
    }


  
    return <div className='HomePage'>
      <div className="HomePage-container">
        <div className="HomePage-container-body">
          <h2 className="HomePage-container-title">Upload a file</h2>
          <p className="HomePage-container-description">Attach the file below</p>
          <button className="HomePage-upload-area" onClick={handleUploadClick}>
            <span className="HomePage-upload-area-icon">
            <svg width="34px" height="42px" viewBox="0 0 340.531 419.116">
              <g id="files-new" clipPath="url(#clip-files-new)">
                <path id="Union_2" data-name="Union 2" d="M-2904.708-8.885A39.292,39.292,0,0,1-2944-48.177V-388.708A39.292,39.292,0,0,1-2904.708-428h209.558a13.1,13.1,0,0,1,9.3,3.8l78.584,78.584a13.1,13.1,0,0,1,3.8,9.3V-48.177a39.292,39.292,0,0,1-39.292,39.292Zm-13.1-379.823V-48.177a13.1,13.1,0,0,0,13.1,13.1h261.947a13.1,13.1,0,0,0,13.1-13.1V-323.221h-52.39a26.2,26.2,0,0,1-26.194-26.195v-52.39h-196.46A13.1,13.1,0,0,0-2917.805-388.708Zm146.5,241.621a14.269,14.269,0,0,1-7.883-12.758v-19.113h-68.841c-7.869,0-7.87-47.619,0-47.619h68.842v-18.8a14.271,14.271,0,0,1,7.882-12.758,14.239,14.239,0,0,1,14.925,1.354l57.019,42.764c.242.185.328.485.555.671a13.9,13.9,0,0,1,2.751,3.292,14.57,14.57,0,0,1,.984,1.454,14.114,14.114,0,0,1,1.411,5.987,14.006,14.006,0,0,1-1.411,5.973,14.653,14.653,0,0,1-.984,1.468,13.9,13.9,0,0,1-2.751,3.293c-.228.2-.313.485-.555.671l-57.019,42.764a14.26,14.26,0,0,1-8.558,2.847A14.326,14.326,0,0,1-2771.3-147.087Z" transform="translate(2944 428)" fill="var(--c-action-primary)"/>
              </g>
            </svg>
            </span>
            <span className="HomePage-upload-area-title">Drag file(s) here to upload.</span>
            <span className="HomePage-upload-area-description">
                Alternatively, you can select a file by <br/><strong>clicking here</strong>
            </span>
          </button>
          <form>
            <input 
              type="file"
              accept='audio/*'
              ref={fileInputRef}
              onChange={handleFileChange}
              style={{ display: 'none' }}
            />
          </form>
          
        </div>
      </div>
    </div>
}