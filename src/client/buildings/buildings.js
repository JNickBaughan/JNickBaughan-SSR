import React from 'react';

const BuildingForm = () => {
    const click = () => {
        alert('this is the building form page')
    }
    return (
        <div>
            <div>
            This will be the Building form
            </div>
            <button onClick={click}>Click!</button>
        </div>
    );
};


export default BuildingForm;