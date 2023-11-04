import PropTypes from "prop-types";

const Gretting = ({ text, children }) => {
    console.log(children);


    return (
        <>
            <h1 className='title'>{text ? text : "hi"}</h1>
            {children}
        </>
    )
}

Gretting.propTypes = {
    text: PropTypes.string
}

export default Gretting;