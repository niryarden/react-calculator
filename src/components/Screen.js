import React from 'react';

const style = {
    'width': '165px',
    'height': '45px',
    'fontSize': 'larger',
    'margin': '5px 5px 5px 5px'
};

const Screen = (props) => {
    return (
        <input type="text" placeholder={props.prompt} readOnly style={style} />
    );
};

export default Screen;