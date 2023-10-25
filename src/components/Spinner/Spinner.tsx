import React from 'react';
import './Spinner.css';

const Spinner: React.FC = () => {
    return (
        <svg className="spinner" width="65px" height="65px" viewBox="0 0 66 66">
            <circle className="spinner-path" fill="none" strokeWidth="6" strokeLinecap="round" cx="33" cy="33" r="30"></circle>
        </svg>
    );
}

export default Spinner;
