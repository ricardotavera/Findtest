import React from 'react'
import Popup from './Popup'
import ListSubject from './ListSubject'
import '../../App.css'
import './Average.css'
import PopupGrade from './PopupGrade'


// Global variable
var grade = []

class Average extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            mySubjects: [],
            buttonPopup: false,
            buttonGo: false
        }

        

    }

    

    deleteSub(key){
       // this.setState((state, param)=>{mySubjects: state.mySubjects})
    }

    calculateAverage(records){

        var numerator = 0
        var denominator = 0
        var finalGrade, collegeState, earnedCredits
        const grades = []
        const names = []

        for(let i=0; i<records.length; i++){
            numerator = numerator + records[i].credit*records[i].grade
            denominator = denominator + Number(records[i].credit)
            grades[i] = records[i].grade
            names[i] = records[i].name
    }

    finalGrade = numerator/denominator

    if (finalGrade < 2.7){
        collegeState = 'PFU'
        earnedCredits = 0
    }else if (finalGrade < 3.2){
        collegeState = 'Condicional'
        earnedCredits = 0
    }else if (finalGrade < 3.5){
        collegeState = 'Normal'
        earnedCredits = 2
    }else if (finalGrade < 3.8){
        collegeState = 'Normal'
        earnedCredits = 4
    }else if (finalGrade < 4.2){
        collegeState = 'Normal'
        earnedCredits = 6
    }else{
        collegeState = 'Normal'
        earnedCredits = 8
    }


    console.log(records.name)   
    return [finalGrade.toFixed(2), collegeState, earnedCredits, names, grades]
}

    addSubject(pname, pcredit, pgrade, pkey) {
        console.log(pkey)
        if(!pkey){
        const newSubject = { name: pname, credit: pcredit, grade: pgrade }
        const temp = [...this.state.mySubjects]
        temp.unshift(newSubject)
        let index
        for (index = 0; index < temp.length; index++) {
            temp[index].key = index + 1
        }

    
        this.setState({ mySubjects: [...temp] })

    }else{
        const temp = [...this.state.mySubjects]
        for(let i=0; i<this.state.mySubjects.length; i++){
                    if(pkey==temp[i].key){
                        temp[i].name = pname;
                        temp[i].credit = pcredit;
                        temp[i].grade = pgrade;
                        break
                    }  
        }
        this.setState({mySubjects: [...temp]});
    }
        }


    render() {

        window.scrollTo(0, 0)
        return <div >
            <div className='back'>
                <div className='centerDiv'>
                    <div className='left-description'>
                        <h1 > <span> Mi</span>  promedio</h1>
                        <p >En esta seccion puede ingresear los datos de las asignaturas cursadas y debe presionar el boton "Agregar". Cuando ya haya agregado
                            todas las asignaturas debera presionar el boton "Calcular Promedio".
                        </p>
                        <input type='button' onClick={() => this.setState({ buttonPopup: true })} value='Agregar' className='add-subject cursor' />

                    </div>
                
                    <div className='preview-subjects'>
                    <div className='inputSection'>
                        <h2 className=' register' >Registro</h2>
                            <table className='tb-subject'>
                                <thead>
                                    <td>Nombre</td>
                                    <td>Creditos</td>
                                    <td>Puntaje</td>
                                </thead>
                            </table>
                        <div className='list-subjects'>
                        <ListSubject list={this.state.mySubjects} modifySub={(p1, p2, p3, p4) => this.addSubject(p1, p2, p3, p4)} />
                        </div> 
                    </div>
                        <div className='button-go cursor' onClick={() => {
                            grade = this.calculateAverage(this.state.mySubjects)
                            this.setState({ buttonGo: true})

                        }
                        }>
                        CALCULAR
                    </div>
                    </div>
                    
                    
                    <Popup trigger={this.state.buttonPopup} setTrigger={() => this.setState({ buttonPopup: false })} addSub={(p1, p2, p3) => this.addSubject(p1, p2, p3)} />
                    <PopupGrade visible={this.state.buttonGo} setTrigger={() => this.setState({ buttonGo: false })} grade={grade[0]} collegeState={grade[1]} earnedCredits={grade[2]} subNames={grade[3]} subGrades={grade[4]}/>
                </div>
                

            </div>
           
        </div>
    }


}

export default Average;
