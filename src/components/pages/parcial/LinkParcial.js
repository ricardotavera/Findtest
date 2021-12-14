import React from 'react'
import Parcial from './Parcial'

function LinkParcial(props) {
    return (
        <div>
            <h2>{props.subject}</h2>
            <Parcial subject={props.subject} name={props.name} />
        </div>
    )
}

export default LinkParcial
