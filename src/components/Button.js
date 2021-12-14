import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large'];
export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    ButtonSize,
    link
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    
    const checkButtonSize = SIZES.includes(ButtonSize) ? ButtonSize : SIZES[0];
    
    
    return(
        <Link to={link} className='btn-mobile'>
            <button 
                className={`btn  ${checkButtonStyle} ${checkButtonSize}`}
                onClick={onClick}
                type={type}
            >
                {children}
            </button>

            
        </Link>
    )

};