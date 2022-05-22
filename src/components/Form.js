import React, { useState } from 'react';
import '../css/Form.css';
function Form() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        contact: "",
        companyName: "",
        query: "",
    });
    const handleInput = (e) => {
        const copyFormData = { ...formData };
        copyFormData[e.target.name] = e.target.value;
        setFormData(copyFormData);
    };
    const sendData = async (e) => {
        e.preventDefault();
        const { firstName, lastName, email, contact, companyName, query } = formData;
        if (formData.firstName && formData.lastName && formData.email && formData.contact && formData.companyName && formData.query) {
            console.log(formData);
            const response = await fetch(
                "https://v1.nocodeapi.com/homesh/google_sheets/wJPSPDnkpKFGxGno?tabId=Sheet1",
                {
                    method: "post",
                    body: JSON.stringify([
                        [
                            firstName,
                            lastName,
                            email,
                            contact,
                            companyName,
                            query,
                        ],
                    ]),
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            const json = await response.json();
            console.log("Success:", JSON.stringify(json));
            alert(`Query sent successfully!`);
            if (json) {
                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    contact: "",
                    companyName: "",
                    query: "",
                });
            }
            else
            {
                alert(`Please complete the form.`);
            }
        }
        else{
            alert(`Please complete the form.`);
        }
    }
    return (
        <>
            <div className='form'>
                <div className="form-head">
                    <h1> REACH OUT TO US </h1>
                    <p> Feel free to reach out if you want to collaborate or have any queries for us.</p>
                </div>
                <form method='post' onSubmit={sendData} name="google-sheet" >
                    <div className='row-container'>
                        <input className='input-text' onChange={handleInput} type="name" name="firstName" value={formData.firstName} placeholder='Your Name*' />
                        <input type="name" className='input-text' onChange={handleInput} name="lastName" value={formData.lastName} placeholder='Last Name*' />
                    </div>
                    <div className='row-container'>
                        <input type="text" className='input-text' onChange={handleInput} name="email" value={formData.email} placeholder='Company email*' />
                        <input type="number" name="contact" onChange={handleInput} className='input-text' value={formData.contact} placeholder='Contact number*' />
                    </div>
                    <div className='row-container'>
                        <input type="text" name="companyName" onChange={handleInput} value={formData.companyName} className='input-text' placeholder='Company*' />
                        <input type="text" name="query" value={formData.query} onChange={handleInput} className='input-text' placeholder='Your Message*' />
                    </div>
                    <input name='submit' className="send-btn" type="submit" value='SEND' />
                </form>
            </div>
        </>
    )
}
export default Form