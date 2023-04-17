import React from 'react'

export default function AddPatient() {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-4'>Register Patient</h2>
                <div className='mb-3'>
                    <label htmlFor='Usernmae' className='form-label'>
                        Username
                    </label>
                    <input 
                        type={"text"}
                        className="form-comtrol"
                        placeholder="Enter your name"
                        name = "username"
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor='Email' className='form-label'>
                        E-mail
                    </label>
                    <input 
                        type={"text"}
                        className="form-comtrol"
                        placeholder="Enter your e-mail address"
                        name = "email"
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor='Phone' className='form-label'>
                        Phone Number
                    </label>
                    <input 
                        type={"text"}
                        className="form-comtrol"
                        placeholder="Enter your phone number"
                        name = "phone"
                    />
                </div>
            </div>
        </div>
    </div>
  )
}
