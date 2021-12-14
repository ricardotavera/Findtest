import React from 'react';
import Item2 from './Item2';
import '../exams/List.css';
function List2(props) {
    return (
        <div className="List">
           
           
        <br/>
        
         {   
             props.items.map(item =>
                 
                   
                   
                 <Item2 
                     key={item.id} 
                     id={item.id}
                     address={item.address}
                     src={item.image}
                     text={item.title}
                     label={item.label}
                     
                 
                 />

                 
                 
                 
                 

                 )
             
                 
                 
         }
         
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         
     </div>
     
    )
}

export default List2
