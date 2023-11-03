import React from 'react'

const Gretting = ({ text, children }) => {
    console.log(children);


    return (
        <>
            <h1 className='title'>{text ? text : "hi"}</h1>
            {children}
        </>
    )
}

export default Gretting;