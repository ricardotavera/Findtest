import React from 'react'
import ItemSubject from './ItemSubject'
import './Average.css'


function ListSubject(props) {
    
    if(!props.list[0]) {
        var invisbleTag = <h4 className='no-subjects'> No hay asignaturas registradas</h4> 
      }else{
        var invisbleTag = null
      }
    
    return (
        
        <div >
           
            {invisbleTag}

            <div>
                {props.list.map(item =>
                    <ItemSubject key={item.key} myKey={item.key} code={'AS' + (item.key)} name={item.name} grade={item.grade} credit={item.credit} modifySub={props.modifySub} />

                )
                }
            </div>
        </div>
    )
}

export default ListSubject
