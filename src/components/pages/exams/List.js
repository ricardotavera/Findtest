import React from 'react';
import Item from './Item';
import './Menu.css';
import '../../Cards.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'






function List(props) {



    return (
        <div className="list">

            <br />
            <br />
            <br />
            { !props.items.length &&
        
        <p className='no-coincidences-message'>

<i className="bi bi-emoji-frown-fill"></i>
                  
                    No se encontraron asignaturas que coincidan con la busqueda...
                </p> }
               
            <br />
            {
                props.items?.map(item =>
                    <Item
                        key={item.id}
                        id={item.id}
                        src={item.image}
                        text={item.title}
                        label={item.label}
                        params={item.params}
                        name={item.name}
                        code={item.code}
                    />
                )
            }
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

        </div>

    );
}

export default List;