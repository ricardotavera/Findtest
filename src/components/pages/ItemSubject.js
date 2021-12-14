import React, {useState} from 'react'
import './ItemSubject.css'
import PopupDelSubject from './PopupDelSubject'



function ItemSubject(props) {

    const [btnPopup, setBtnPopup] = useState(false)
    return (
        <div>
        <div className='item-sub cursor' onClick={() => setBtnPopup(true)}>
            <h6 className='pname'>{props.name}</h6>
            <p className='credit-list'>{props.credit}</p>
            <p className='blue'>{props.grade}</p>
        </div>
        <PopupDelSubject name={props.name} visible={btnPopup} setVisible={(val) => setBtnPopup(val)} subKey={props.key}/>
        </div>
    )
}

export default ItemSubject
