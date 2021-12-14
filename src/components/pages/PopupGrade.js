import React from 'react'
import { Bar, Pie } from 'react-chartjs-2'





class PopupGrade extends React.Component {

    constructor(props) {
        super(props)
        this.chart = React.createRef();
        
        

    }

   
    render() {

         const data = {
            labels: this.props.subNames,
            datasets: [
                {
                    label: 'Calificacion',
                    backgroundColor: 'rgb(0, 89, 255)',
                    borderWidth: 2,
                    data: this.props.subGrades
                }
            ]}

        return (this.props.visible) ? (
            <div className='popup'>
                
                <div className='popup-show-grade' >
                <button onClick={() => this.props.setTrigger()} className="close cursor"/>
                   <div className='grade-header'><h2 className='grade-title'>Reporte Académico</h2>
                   
                   </div>
                    
                  
                    <br /> 
                    <div className='block'>
                        <div className='grade-item'> <span> {this.props.grade} </span>  <br/> <p> Nota Semestre </p>  </div>
                        <div className='grade-item'> <span>  {this.props.earnedCredits} </span> <br/> <p> Creditos Adicionales </p> </div>
                        <div className='grade-item'> <span> {this.props.collegeState} </span> <br/> <p> Estado </p> </div>
                    </div>


                    <div className='bar-chart '>
                
                        <Bar 
                            data={data}
                            options={{
                               
                                legend: {
                                    display: false
                                },

                                scales: {

                                    x: {
                                        grid: {
                                          display: true,
                                          drawBorder: true,
                                          drawOnChartArea: true,
                                          drawTicks: true
                                        }
                                      },

                                    y: {
                                      min: 5.0,
                                      max: 0.0,
                                    }
                            }   
                        }}
                            

                        />
                       
                    </div>



                </div>
            </div>



        ) : '';

    }


}




export default PopupGrade
