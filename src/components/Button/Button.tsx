import React from 'react';
import './Button.css';

interface ButtonProps {
    text: string;
    type: ButtonType
    onClick: () => void;
}

export enum ButtonType {
    Primary = 'ButtonPrimary',
    Secondary = 'ButtonSecondary',
}

const Button: React.FC<ButtonProps> = ({ text, onClick, type=ButtonType.Primary }) => {
  return (
    <div className={type} onClick={onClick}>
      {text}
    </div>
  );
};

export default Button;
