import React from 'react';

const PropertyForm = () => {
    const click = () => {
        alert('this is the property form page')
    }
    return (
        <div>
            <div>
            This will be the property form
            </div>
            <button onClick={click}>Click!</button>
        </div>
    );
};


export default PropertyForm;