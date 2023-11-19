import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import TranscribePage from './pages/TranscribePage/TranscribePage';
import AudioAnalysisProvider from './contexts/AudioAnalysis/AudioAnalysisContext';
import ActionProvider from './contexts/Action/ActionContext';
import VisualizationPage from './pages/VisualizationPage/VisualizationPage';


function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <ActionProvider>
          <AudioAnalysisProvider>
            <Routes>
              <Route path='/' Component={HomePage} />
              <Route path="/transcribe" Component={TranscribePage} />
              <Route path='/audio/:id' Component={VisualizationPage} />
            </Routes>
          </AudioAnalysisProvider>
        </ActionProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
