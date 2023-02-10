import React from 'react';
import './StyleExams.css';
import List from './List';
import Menu from './Menu';
import '../../HeroSection'
import './SearchPage.css'



class SearchPage extends React.Component {

  constructor(props){
    super(props);
    this.calculo1 = [ 

      {id:0, label:'Examen 2 2018-2', address: 'https://drive.google.com/file/d/1NYg_DwzjaiabzfIi2VTgdXqJzFkuLgFZ/view?usp=sharing'},
      {id:1, label:'Examen 4 2018-2', address: 'https://drive.google.com/file/d/17DQIyOIsCOd7VJbixlsQHjor0Uunl1p6/view?usp=sharing'},
      {id:12, label:'Examen 3 2018-1', address: 'https://drive.google.com/file/d/16IDu_Q-u4reKfV-zntprVZiNPZtVi5ty/view?usp=sharing'},
      {id:13, label:'Examen 4 2019-1', address: 'https://drive.google.com/file/d/1aph7DE-OxcvcRwOkHaJ_wiWOtLh6PjIz/view?usp=sharing'},
      {id:2, label:'Taller Limites P1', address: 'https://drive.google.com/file/d/1WD6YUnRGjAYSSpASZ2eNvMiX5aLdGMHb/view?usp=sharing'},
      {id:3, label:'Taller Limites P2', address: 'https://drive.google.com/file/d/1SCQTDwiM-jl4CmrxDOJvblNe4aiJfsXZ/view?usp=sharing'},
      {id:4, label:'Taller Limites P3', address: 'https://drive.google.com/file/d/1gkNMT5Tcz53lpxFZ2ozAk4oDy7jJt8Bu/view?usp=sharing'},
      {id:5, label:'Taller Derivadas P1', address: 'https://drive.google.com/file/d/1LJDOTGLC9UhNQGGiPkcX_FZiHcp-mHAc/view?usp=sharing'},
      {id:6, label:'Taller Derivadas P2', address: 'https://drive.google.com/file/d/1eAiL8eTIk5AORL1QfAnAS5nA9JOIjJFU/view?usp=sharing'},
      {id:7, label:'Taller Derivadas P3', address: 'https://drive.google.com/file/d/1xhivcry_QGZRZp_NyVNMY0NeYbUu5X6U/view?usp=sharing'},
      {id:8, label:'Taller Derivadas P4', address: 'https://drive.google.com/file/d/1oPelU2Yv4UWgBVPRX3o7SqqvX4rgZccV/view?usp=sharing'},
      {id:9, label:'Aplicaciones P1', address: 'https://drive.google.com/file/d/18NTHK60t2GyOeAzCOnaGfJ0hNNTX8RbY/view?usp=sharing'},
      {id:10, label:'Examen ...', address: ''},
      {id:11, label:'Examen ...', address: ''}]

      this.calculo2 = [ 

        {id:0, label:'Examen 1 2018-2', address: 'https://drive.google.com/file/d/1MAMyTG50A2U5K9Bitl7_sjcazUzW059A/view?usp=sharing'},
        {id:1, label:'Examen 2 2018-2', address: 'https://drive.google.com/file/d/13nkQfLCGiM205A-mqa5JwJvS-B-ldc1s/view?usp=sharing'},
        {id:2, label:'Examen 3 2018-2', address: 'https://drive.google.com/file/d/1H3TLgMljsIHvl09ltiF1aJA7fsEJ1xbJ/view?usp=sharing'},
        {id:3, label:'Examen 2 2019-1', address: 'https://drive.google.com/file/d/1pnXfNBfrc_pvWb6XooJ66VrxkTY7PCmw/view?usp=sharing'},
        {id:4, label:'Examen 3 2019-1', address: 'https://drive.google.com/file/d/1Rp1N6CLESGaVA3Iw0ouUTCai-YHz9Gql/view?usp=sharing'},
        {id:5, label:'Examen 4 2019-1', address: 'https://drive.google.com/file/d/1Lc-0m_MEtc91bWwofDzrSWT-uRNRYA4b/view?usp=sharing'},
        {id:6, label:'Examen 4 2019-2', address: 'https://drive.google.com/file/d/1uuGqOLbBF2jr8mUkBwkYcWXdNo7Zswr-/view?usp=sharing'}]

    this.calculo3 = [

      { id: 0, label: 'Examen 1.A 2016-1', address: 'https://drive.google.com/file/d/1bYburva_KKHaJ_fB6bf0UmbZXqe5YomT/view?usp=sharing' },
      { id: 1, label: 'Examen 1.B 2016-1', address: 'https://drive.google.com/file/d/1zhZyb--k3cylO6-QxjC5kXqa2xig3bex/view?usp=sharing' },
      { id: 2, label: 'Examen 1.C 2016-1', address: 'https://drive.google.com/file/d/168SToVGZlza0s9b8qrluS0ZsVoZK4v9p/view?usp=sharing' },
      { id: 3, label: 'Examen 2.A 2016-1', address: 'https://drive.google.com/file/d/1ysq3Q0B9AHmrWRse2u20eKbkQHjPUYxE/view?usp=sharing' },
      { id: 4, label: 'Examen 2.B 2016-1', address: 'https://drive.google.com/file/d/1H6ksVyKs8deiULlmTaIRlDrGIJxZM-1B/view?usp=sharing' },
      { id: 5, label: 'Examen 1 2018-2', address: 'https://drive.google.com/file/d/1fbdgmzLKoELkWFSD4aZznWSq-m57Pbuo/view?usp=sharing' },
      { id: 6, label: 'Examen 1.A NI', address: 'https://drive.google.com/file/d/1Z3gCx8k-hj5FrCG2meCYAq1EMbKYcQ7O/view?usp=sharing' },
      { id: 7, label: 'Examen 1.B NI', address: 'https://drive.google.com/file/d/1JdaTZtnTBck4XHw1AP_SqtXteYiYTGEV/view?usp=sharing' },
      { id: 8, label: 'Examen 1.C NI', address: 'https://drive.google.com/file/d/1TtAk-0YxYrN2CUyr2IS289mgkhhFSkON/view?usp=sharing' },
      { id: 9, label: 'Examen 2.A NI', address: 'https://drive.google.com/file/d/1YOBxDr_12UDNeP8VzYMBAJuj8wDU63iR/view?usp=sharing' },
      { id: 10, label: 'Examen 2.B NI', address: 'https://drive.google.com/file/d/18BQYkpNIgYF4MiaY3QVgqeqBmeczZcsr/view?usp=sharing' },
      { id: 11, label: 'Examen 4 NI', address: 'https://drive.google.com/file/d/1JU5EnA73hXGIURREX14TA2miH07wAQ7-/view?usp=sharing' },
      { id: 12, label: 'Taller-Parcial Derivadas', address: 'https://drive.google.com/file/d/1rKxKB-JexfSZbMi_sXjXT1IaFrZP276d/view?usp=sharing' },
      { id: 13, label: 'Taller-Parcial Funciones', address: 'https://drive.google.com/file/d/137QjNqzOB5oZjzrSqEG0mxGdCOJTQz2Q/view?usp=sharing' },
      { id: 14, label: 'Taller-Parcial Optimizacion', address: 'https://drive.google.com/file/d/1wHBfZG0gKVd15L9CDXoTfLKSv2ypJL9y/view?usp=sharing' },
      { id: 15, label: 'Taller-Parcial Innpmtegral de linea', address: 'https://drive.google.com/file/d/1WdjfVnwWNUuydDkLqce7SdjdFMJMskOw/view?usp=sharing' }]

    this.algebra1 = [

      { id: 0, label: 'Examen 1 2019-2', address: 'https://drive.google.com/file/d/1HmAhyu_JX9fgu-48mVdBirQanbBLEf_1/view?usp=sharing' },
      { id: 1, label: 'Examen 1.A 2019-1', address: 'https://drive.google.com/file/d/1cDh9kridcuIVsMIM9q1O5G_TKGxeU4BO/view?usp=sharing' },
      { id: 1.1, label: 'Examen 1.B 2019-1', address: 'https://drive.google.com/file/d/132AlMD6WJ3TuGww5RlD4v1vfQLnVMXMo/view?usp=sharing' },
      { id: 2, label: 'Examen 2 2019-2', address: 'https://drive.google.com/file/d/1GZXZr715dOsMEU6HY3J6nGfz0K7tAM4N/view?usp=sharing' },
      { id: 3, label: 'Examen 2 2018-2', address: 'https://drive.google.com/file/d/1E87pyQk6V28nmDOoPAMS62ihphYvdkb9/view?usp=sharing' },
      { id: 4, label: 'Examen 2 2019-1', address: 'https://drive.google.com/file/d/1JE8t8fCbeIGVPt9qjV2Wsl6vrJ3vhZM6/view?usp=sharing'  },
      { id: 5,  label: 'Examen 3 2019-1', address: 'https://drive.google.com/file/d/1OcUi29blDOfRKqvNMMCspYYHIcqNRl6j/view?usp=sharing' },
      { id: 6, label: 'Examen 3 2019-2', address: 'https://drive.google.com/file/d/151Fdum2L7pmQ06qAQqLEekysbxWBOq3I/view?usp=sharing' }]

    this.ecuacionesdif = [

      { id: 0, label: 'Examen 1 2018-2', address: 'https://drive.google.com/file/d/1ktpdyi8OK21Vc8BEFwiw5nQgxOpaw4PY/view?usp=sharing' },
      { id: 1, label: 'Examen 1 2018-1.Inter', address: 'https://drive.google.com/file/d/1ktpdyi8OK21Vc8BEFwiw5nQgxOpaw4PY/view?usp=sharing' },
      { id: 2, label: 'Examen 2 2018-2', address: 'https://drive.google.com/file/d/1GJ1g-RyE0wWQtHVams15LZr3XRe16oUt/view?usp=sharing' },
      { id: 3, label: 'Examen 2 2018-1.Inter', address: 'https://drive.google.com/file/d/1771IrqhHRRA_ztqjUrrdTfbwwt7mX6jY/view?usp=sharing' },
      { id: 4, label: 'Examen 3 2019-2', address: 'https://drive.google.com/file/d/1GJ1g-RyE0wWQtHVams15LZr3XRe16oUt/view?usp=sharing' },
      { id: 5, label: 'Examen 3 2018-2', address: 'https://drive.google.com/file/d/1965J7UeKxHakqLQfahAQJCEDZzRHVg3Q/view?usp=sharing' },
      { id: 6, label: 'Examen 3 2018-1.Inter', address: 'https://drive.google.com/file/d/1HKmogXiZDgAGd73qfOfcZTpeBHrWYVXM/view?usp=sharing' },
      { id: 7, label: 'Examen 4 2019-1', address: 'https://drive.google.com/file/d/1RtZAOfgeRq-V3IX9L7opdfVasrXuCLvv/view?usp=sharing' },
      { id: 8, label: 'Examen 4 2018-2', address: 'https://drive.google.com/file/d/1HFxgvtVDd108r4rWGRr_HG5v4QmC3Ch5/view?usp=sharing' }]

    this.fisica1 = [

      { id: 0, label: 'Examen 1 2020-1', address: 'https://drive.google.com/file/d/1x85bKHNGwGJGcBwqwdWGtxER_549PoB8/view?usp=sharing' },
      { id: 1, label: 'Examen 2 2020-1', address: 'https://drive.google.com/file/d/1iGC3lbvxHUe1wqHj8G4OK40zsaJ4Iikv/view?usp=sharing' },
      { id: 2, label: 'Examen 3 2020-1', address: 'https://drive.google.com/file/d/10R7baIkxG2dyHF62JAD96-CqQiS0N6pG/view?usp=sharing' }]

    this.fisica2 = [

      { id: 0, label: 'Examen 1 2018-1', address: 'https://drive.google.com/file/d/1z8T8Cj-gMREYbeMdASzKMgs4nE-vqfpS/view?usp=sharing' },
      { id: 1, label: 'Taller 2006', address: 'https://drive.google.com/file/d/1ZSNs7lVp6TCP_Pv7-AUYMVFf-sU3YVrn/view?usp=sharing' },
      { id: 2, label: 'Taller 2005', address: 'https://drive.google.com/file/d/1RUVOgNS0EZBeZYbFpVUO47hY95aeK84x/view?usp=sharing' },
      { id: 3, label: 'Taller Capacitores', address: 'https://drive.google.com/file/d/1HSPdD3jmunfo1_IREeVsCLL08kgmDWP-/view?usp=sharing' },
      { id: 4, label: 'Mecanica A. Examen 3 2018-1', address: 'https://drive.google.com/file/d/172rIhVluk1I9U3yUqDASqsQyIWnErwPA/view?usp=sharing' },
      { id: 5, label: 'Mecanica A. Examen 4 2018-1', address: 'https://drive.google.com/file/d/1InfdCkrYGViRPc8E5qyx3hJ9iP6nd_tN/view?usp=sharing' }]

    this.fisica3 = [

      { id: 0, label: 'Taller Corte 1 2021-1', address: 'https://drive.google.com/file/d/1TzgZCLSBG9fg2w90Uy205HLZGRW1qMwU/view?usp=sharing' }]

    this.quimica1 = []


    this.quimica2 = []

    this.geometria = []

                


    
    

    

    this.state = {


/* -----------------------------------------------------------------------------------------------------------------------*/
      subjects:[ {id:0, title: 'Calculo I', image: '../../../images/calculus.jpg', label:'Diferencial', name:'ca1', params: this.calculo1},
                 {id:1, title: 'Calculo II', image: '../../../images/calculus.jpg', label:'Integral', name:'ca2', params: this.calculo2},
                 {id:2, title: 'Calculo III', image: '../../../images/calculus.jpg', label:'Vectorial', name:'ca3', params: this.calculo3},
                 {id:3, title: 'E. Diferenciales', image: '../../../images/calculus.jpg', label:'Aplicaciones', name:'de', params: this.ecuacionesdif},
                 {id:4, title: 'Fisica I', image: '../../../images/physics.jpg', label:'Clásica' , name:'ph1', params: this.fisica1},
                 {id:5, title: 'Fisica II', image: '../../../images/physics2.jpg', label:'Electromagnetismo', name:'ph2', params: this.fisica2},
                 {id:6, title: 'Fisica III', image: '../../../images/physics3.jpg', label:'Ondas', name:'ph3', params: this.fisica3},
                 {id:7, title: 'Algebra lineal', image: '../../../images/algebra.jpg', label:'Lineal', name:'la', params: this.algebra1},
                 {id:8, title: 'Programacion', image: '../../../images/programming.jpg', label:'Fundamentos', name:'pgm', params: [], code:'/coder'},
                 {id:9, title: 'Quimica I', image: '../../../images/chemistry.jpg', label:'Básica', name:'ch1', params: this.quimica1},
                 {id:10, title: 'Quimica II', image: '../../../images/chemistry.jpg', label:'Introductoria', name:'ch2', params: this.quimica2},
                 {id:11, title: 'Geometria', image: '../../../images/geometry.jpg', label:'Descriptiva', name:'dsg', params: this.geometria}
               

    ],

    subjectsCopy: []
    };
  }

  componentDidMount(){
    this.intitSubjects();    
  }

  intitSubjects = () =>{
    this.setState((state, props) => ({
      subjectsCopy: [...state.subjects]
    }));

  }
  onSearch = (query) => {
    if(query == '')
    {
      this.intitSubjects();
    }else
    {
      const tem = [...this.state.subjects];
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
      <div className="search-content">
        {window.scrollTo(0, 0)}


        <Menu onsearch={this.onSearch} />        
        <List items={this.state.subjectsCopy}/>
         
      </div>
    );
  }

}


export default SearchPage;
