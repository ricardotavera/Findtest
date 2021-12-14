import React from 'react';
import '../exams/StyleExams.css';
import Menu from '../exams/Menu';
import List2 from './List2';


const Parcial = (props) => {

  if(!props.location.params.length){
    var invisbleTag = <h4 className='empty'> Esta asigantura no posee parciales hasta el momento</h4> 
  }else{
    var invisbleTag = null
  }
  {window.scrollTo(0, 0)}

  return (
    <div className="app">

        <h2 className='title2'> {props.location.asignature}</h2>
        <List2 items={props.location.params}/>
        {invisbleTag}
         
      </div>
  )
}

export default Parcial

/*
class Parcial extends React.Component {

  constructor(props){
    super(props);

    

    
    
    this.state = {
      
      subject: [...this.state.asignature],

      calculo1: [ 

                 {id:2, title: 'Cálculo III', image: '../../../images/calculus.jpg', label:'Vectorial'},
                 {id:3, title: 'E. Diferenciales', image: '../../../images/calculus.jpg', label:'Cálculo'},
                 {id:4, title: 'Física I', image: '../../../images/physics.jpg', label:'Clásica'},
                 {id:5, title: 'Física II', image: '../../../images/physics2.jpg', label:'Electromagnetismo'},
                 {id:6, title: 'Física III', image: '../../../images/physics3.jpg', label:'Ondas'},
                 {id:7, title: 'Álgebra lineal', image: '../../../images/algebra.jpg', label:'Lineal'},
                 {id:8, title: 'Programación', image: '../../../images/programming.jpg', label:'Fundamentos'},
                 {id:9, title: 'Química I', image: '../../../images/chemistry.jpg', label:'Básica'},
                 {id:10, title: 'Química II', image: '../../../images/chemistry.jpg', label:'Introductoria'},
                 {id:11, title: 'Geometría', image: '../../../images/geometry.jpg', label:'Descriptiva'}
        
               

    ],

    calculo2:[ {id:0, title: 'Cálculo I', image: '../../../images/calculus.jpg', label:'Diferencial'},
                 {id:1, title: 'Cálculo II', image: '../../../images/calculus.jpg', label:'Integral'},
                 {id:2, title: 'Cálculo III', image: '../../../images/calculus.jpg', label:'Vectorial'},
                 {id:3, title: 'E. Diferenciales', image: '../../../images/calculus.jpg', label:'Cálculo'},
                 {id:4, title: 'Física I', image: '../../../images/physics.jpg', label:'Clásica'},
                 {id:5, title: 'Física II', image: '../../../images/physics2.jpg', label:'Electromagnetismo'},
                 {id:6, title: 'Física III', image: '../../../images/physics3.jpg', label:'Ondas'},
                 {id:7, title: 'Álgebra lineal', image: '../../../images/algebra.jpg', label:'Lineal'},
                 {id:8, title: 'Programación', image: '../../../images/programming.jpg', label:'Fundamentos'},
                 {id:9, title: 'Química I', image: '../../../images/chemistry.jpg', label:'Básica'},
                 {id:10, title: 'Química II', image: '../../../images/chemistry.jpg', label:'Introductoria'},
                 {id:11, title: 'Geometría', image: '../../../images/geometry.jpg', label:'Descriptiva'}
        
               

    ],

    calculo3:[ 
                 {id:8, title: 'Programación', image: '../../../images/programming.jpg', label:'Fundamentos'},
                 {id:9, title: 'Química I', image: '../../../images/chemistry.jpg', label:'Básica'},
                 {id:10, title: 'Química II', image: '../../../images/chemistry.jpg', label:'Introductoria'},
                 {id:11, title: 'Geometría', image: '../../../images/geometry.jpg', label:'Descriptiva'}
        
               

    ],


    
    subjectsCopy: [],
    
    
    };
    
    

     
  }

  componentDidMount(){
    this.intitSubjects();
  }

  intitSubjects = () =>{
    this.setState((state, props) => ({
      subjectsCopy: [...state.subject]
    }));

  }
  onSearch = (query) => {
    if(query == '')
    {
      this.intitSubjects();
    }else
    {
      const tem = [...this.state.subject];
      let res = [];

      tem.forEach( item => {
        if(item.title.toLowerCase().indexOf(query)>-1){
          res.push(item);
        }
      });
      this.setState({ subjectsCopy: [...res]});
    }
  }



  render() {
    return (
      <div className="app">
         <h1>==============</h1>
         <h1>Hello {this.props.name}</h1>
        
        

         
      </div>
    );
  }

}


export default Parcial;

*/