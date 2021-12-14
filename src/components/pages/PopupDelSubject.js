import React from 'react'
import './Average.css'
import './Popup.css'

function PopupDelSubject(props) {
    if(props.visible){
        return (
            <div className='popup'>
                <div className='popup-del-subject' >
                    <p>¿Desea eliminar {props.name}? </p>
                    <div className='del-btns'>
                        <input type='button' value='Eliminar' className='add-btn delete cursor'  />
                        <input type='button' value='No' className='add-btn cursor' onClick={() => props.setVisible(false)}/>
                    </div>
                   
    
                </div>
            </div>
        )
    }else{
      return ''
    }
    
    
}

export default PopupDelSubject
