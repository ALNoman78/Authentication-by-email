import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { signInWithEmailAndPassword } from 'firebase/auth'
import auth from '../../firebase/firebase.init'
import { Link } from 'react-router-dom'

const Login = () => {
    const [user, setUser] = useState(null)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState(false)

    const handleLogIn = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)

        // error and success message

        setError('')
        setSuccess(false)

        // login user

        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result.user)
                setSuccess(true)
            })
            .catch(error => {
                console.log(error.message)
                setError(error.message)
            })

    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary" onClick={() => document.getElementById('my_modal_5').showModal()}> Login</button>
                        </div>
                        <div>
                            {/* modal section  start*/}
                            {/* Open the modal using document.getElementById('ID').showModal() method */}
                            {/* <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>open modal</button> */}
                            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                <div className="modal-box flex flex-col justify-center items-center">
                                    {/* <h3 className="font-bold text-lg">Hello!</h3> */}
                                    {
                                        success && <p className='font-medium text-green-600 text-center'> Successfully Submitted</p>
                                    }
                                    {
                                        error && <p className='text-center font-medium text-red-500 my-5' m-3>{error}</p>
                                    }
                                    <div className="modal-action">
                                        <form method="dialog">
                                            {/* if there is a button in form, it will close the modal */}
                                            <button className="btn ">Close</button>
                                        </form>
                                    </div>
                                </div>
                            </dialog>
                            {/* modal section end */}
                        </div>
                        <p className='text-xl font-medium py-4 '>New to this website <Link className='text-green-600 underline' to={'/register'}> Sign Up ?</Link></p>
                    </form>
                </div>
            </div>
        </div>
    )
}

Login.propTypes = {}

export default Login