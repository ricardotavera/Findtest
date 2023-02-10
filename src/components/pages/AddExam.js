import React from 'react'
import { useState } from 'react';
import '../../App.css';
import './form.css'
import './add.css'

export default function AddExam() {

    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [file, setFile] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Email:', email);
        console.log('Subject:', subject);
        console.log('File:', file);
    };

    window.scrollTo(0, 0)
    return <div className='form-container'>
        <div className="container2">

            <div className="card">
                <div className="card-image">
                    <h2 className="card-heading">
                        Get started
                        <small>Let us create your account</small>
                    </h2>
                </div>
                <form className="card-form">
                    <div className="input">
                        <input 
                            type="email"
                           
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            required className="input-field"/>

                        <label className="input-label">Email</label>
                    </div>
                    <div className="input">
                        <input type="text"

                            className="input-field"
                            value={subject}
                            onChange={(event) => setSubject(event.target.value)}
                            required  />

                        <label className="input-label">Asignatura</label>
                    </div>
                    <div className="input">
                        <input type="file" classname="upload-button" onChange={(event) => setFile(event.target.files[0])} required />

                    </div>
                    <div className="action">
                        <button class="action-button">Enviar</button>
                    </div>
                </form>
                <div className="card-info">
                    <p> Gracias por tu contribucion <a href="/">Findtest</a></p>
                </div>
            </div>
        </div>

    </div>

}
