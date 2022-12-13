import React from 'react';

const ElementoLista = (props) => {
    return (
        <li className='list-group-item'>
            {props.children}
        </li>
    )
}

export default ElementoLista;