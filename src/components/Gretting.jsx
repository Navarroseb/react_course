import React from 'react'

const Gretting = ({ text, children }) => {
    console.log(children);


    return (
        <>
            <h1>
                {text}          
            </h1>
            {children}
        </>
    )
}

export default Gretting;