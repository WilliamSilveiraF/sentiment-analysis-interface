import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import AudioAnalysisProvider from './contexts/AudioAnalysisContext';
import ActionProvider from './contexts/ActionContext';


function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <ActionProvider>
          <AudioAnalysisProvider>
            <Routes>
              <Route path="/" Component={HomePage} />
            </Routes>
          </AudioAnalysisProvider>
        </ActionProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
