import React from 'react';
const MetaDataFun = (props) => {
    return (
        <>
            <div className='pdf_info ' style={{padding:'2px'}}>
                <p>Date:{props.TimeCreated}</p>
                <p>Name:{props.Name}</p>
                <p>Description:{props.DescItem}</p>
                
            </div>
        </>
    );
}

export default MetaDataFun;