import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditPatient() {

    let navigate = useNavigate()

    const { id } = useParams()

    const [user, setUser] = useState({
        username: "",
        email: "",
        phone: ""
    })

    const { username, email, phone } = user;

    const onInputCahnge = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });

    };

    useEffect(() => {
        loadPatient()
    }, []);

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/patient/${id}`, user)
        navigate("/")
    };

    const loadPatient = async () => {
        const result = await axios.get(`http://localhost:8080/patient/${id}`)
        setUser(result.data)
    }
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h2 className='text-center m-4'>Edit Patient</h2>

                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className='mb-3'>
                            <label htmlFor='Usernmae' className='form-label'>
                                Username
                            </label>
                            <input
                                type={"text"}
                                className="form-comtrol"
                                placeholder="Enter your name"
                                name="username"
                                value={username}
                                onChange={(e) => onInputCahnge(e)}
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
                                name="email"
                                value={email}
                                onChange={(e) => onInputCahnge(e)}
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
                                name="phone"
                                value={phone}
                                onChange={(e) => onInputCahnge(e)}
                            />
                        </div>

                        <button type='submit' className="btn btn-outline-primary">
                            Submit
                        </button>
                        <Link className="btn btn-outline-danger mx-2" to="/">
                            Cancel
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    )
}
