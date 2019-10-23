import React from 'react';
import './style.css';

const Screen = (props) => {
    return (
        <input type="text" placeholder={props.prompt} readOnly className='screen' />
    );
};

export default Screen;