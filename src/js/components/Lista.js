import React from 'react';
import PropTypes from 'prop-types';

const Lista = (props) => {
    return (
        <ul className='list-group'>
            <h3>{props.titulo}</h3>
            {props.children}
        </ul>
    )
}

Lista.defaultProps = {
    titulo: 'Este es una titulo de prueba'
}

Lista.propTypes = {
    titulo: PropTypes.string
}

export default Lista;