import React from 'react';

const SaveButton = (props) => {
    
    return (
        <button className="mt-5 mb-2 btn btn-success" onClick={()=>props.saveFnc()}>SAVE</button>
    );

}

export default SaveButton;