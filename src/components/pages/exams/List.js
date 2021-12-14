import React from 'react';
import Item from './Item';
import './Menu.css';
import '../../Cards.css';




function List(props) {
    
    return(
        <div className="List">
           
           
           <br/>
           
            {   
                
                props.items.map(item =>
                    
                      
                      
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
            
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
          
        </div>
        
    );
}

export default List;