import React from 'react';
import './Button.css';

const Button =(props)=>(
    <button onClick={props.clicked} className="Button Danger">{props.children}</button>
);

export default Button; 