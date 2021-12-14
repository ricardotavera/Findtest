import React from 'react'
import './Popup.css'




class Popup extends React.Component {

    constructor(props) {
        super(props);
        this.gradeText = React.createRef();
        this.creditText = React.createRef();
        this.name = React.createRef();
        this.state = {
            nameS: '',
            creditS: 7,
            gradeS: 2.5

        };

        this.onChangeEvent.bind(this)
        this.onChangeEvent0.bind(this)
        this.onChangeEventTxtfld.bind(this)


    }

    cleanFields() {
        this.setState({ nameS: '' })
        this.setState({ creditS: 7 })
        this.setState({ gradeS: 2.5 })
    }

    onChangeEventTxtfld = e => {
        const name = e.target.value.toString();
        this.setState({ nameS: name })

    }

    onChangeEvent0 = e => {
        const credit = e.target.value.toString();
        this.setState({ creditS: credit })
        this.creditText.current.innerHTML = credit
    }

    onChangeEvent = e => {
        const grade = e.target.value.toString();
        this.setState({ gradeS: grade })
        this.gradeText.current.innerHTML = grade

    }


    render() {

        return (this.props.trigger) ? (
            <div className='popup' >
                <div className='popup-content' >
                    <button className='close-btn cursor' onClick={() => this.props.setTrigger()}>Cancelar</button>
                    <br />

                    <h3>{this.props.name ? 'Editar' : 'Nueva Asignatura'}</h3>
                    <form onSubmit={() => {
                        this.props.addSub(this.state.nameS, this.state.creditS, this.state.gradeS, this.props.key)
                            this.cleanFields()
                            this.props.setTrigger()    
                    }} >
                        <div className="subjectInput" >
                            <input className='boxInput' onChange={this.onChangeEventTxtfld} autoFocus type="text" placeholder="nombre" id='newSubject' name='newSubject' defaultValue={this.props.name} required />
                        </div>
                        <br />
                        <br />
                        <br />
                        <label className='label'>  Cantidad de Creditos   </label>
                        <div className='division'>
                            <span ref={this.creditText} className=''>{this.props.credit ? this.props.credit : 7}</span>
                        </div>
                        <input type='range' onChange={this.onChangeEvent0} className='range' min='0' max='14' id='credits' defaultValue={this.props.credit ? this.props.credit : 7} required />
                        <br />
                        <br />
                        <label className='label'>  Nota obtenida</label>
                        <br />
                        <div className='division'>
                            <span className='' ref={this.gradeText}>{this.props.grade ? this.props.grade : 2.5 }</span>
                        </div>
                        <input onChange={this.onChangeEvent} type='range' className='range grade' id='score' min='0.0' max='5.0' step='0.01' defaultValue={this.props.grade ? this.props.grade : 2.5} required />



                        <div className='popup-btns'>
                            <input type='submit'  className='add-btn cursor' value={this.props.name ? 'Okay' : 'Agregar'} />


                        </div>
                        <datalist id='subjectList' dir='false' disabled>
                            <option value='Fundamentos de programación' />
                            <option value='Calculo 1' />
                            <option value='Calculo 2' />
                            <option value='Calculo 3' />
                            <option value='Fisica 1' />
                            <option value='Fisica 2' />
                            <option value='Fisica 3' />
                            <option value='Ecuaciones Diferenciales' />
                            <option value='Quimica 1' />
                            <option value='Quimica 2' />

                        </datalist>
                    </form>

                </div>
            </div>
        ) : '';
    }

}

export default Popup
