import React from 'react';
import './Menu.css';
class Search extends React.Component {

    constructor(props){
      super(props);
    }

    onChangeEvent = e => {
        const query = e.target.value.toString().toLowerCase();
        this.props.onsearch(query);
    }
render() {
    return(
        <div>
            <input type="text"   placeholder="Busca una asignatura" onChange={this.onChangeEvent}/> 
            
        </div>


    );
    
}
}

export default Search