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
        <div class="container2">

            <div class="card">
                <div class="card-image">
                    <h2 class="card-heading">
                        Get started
                        <small>Let us create your account</small>
                    </h2>
                </div>
                <form class="card-form">
                    <div class="input">
                        <input className="input-field" type="email"

                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            required />
                        <label className="input-label">Email</label>
                    </div>
                    <div class="input">
                        <input type="text"
                            
                            className="input-field"
                            value={subject}
                            onChange={(event) => setSubject(event.target.value)}
                            required classname="input-field" />
                        <label class="input-label">Asignatura</label>
                    </div>
                    <div class="input">
                        <input type="file" classname="upload-button" onChange={(event) => setFile(event.target.files[0])} required />
                      
                    </div>
                    <div class="action">
                        <button class="action-button">Get started</button>
                    </div>
                </form>
                <div class="card-info">
                    <p> Gracias por tu contribucion <a href="/">Findtest</a></p>
                </div>
            </div>
        </div>

    </div>

}
