import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from 'firebase/auth'
import auth from '../../firebase/firebase.init'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Register = () => {
    const [user, setUser] = useState(null)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState('')
    const [isVisible, setIsVisible] = useState(false)

    const handleRegister = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        const username = e.target.username.value;
        const image = e.target.image.value;
        // terms and policy section
        const terms = e.target.terms.checked
        console.log(email, password , username , image)

        // checked mark sign
        if (!terms) {
            setError('Please accept our terms and condition')
            return;
        }

        // password validation

        if (password.length < 6) {
            setError('Password should be 6 character');
            return;
        }

        // reset error and status
        setError('')
        setSuccess(false)

        // Create user with email and password

        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user)
                console.log(result.user)
                setSuccess(true)

                // send verification email address
                sendEmailVerification(auth.currentUser)
                    .then(res => console.log('verification email send'))
            });

            // update profile information

            const profile = {
                displayName : username,
                photoURL : image
            }

            updateProfile(auth.currentUser , profile)
            .then(res => console.log('updated profiled'))
            .catch(error => console.log('user profile update error'))
            
            .catch(error => {
                setError(error.message)
                setSuccess(false)
            })
    }
    return (
        <div className='max-w-lg mx-auto p-4'>
            <form onSubmit={handleRegister} className=''>
                <label className="input input-bordered flex items-center gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                    </svg>
                    <input type="text" className="grow" name='username' placeholder="Username" />
                </label>
                <label className="input input-bordered flex items-center gap-2 mt-4">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                    </svg>
                    <input type="text" className="grow" name='image' placeholder="Share your image link" />
                </label>
                <label className="input input-bordered flex items-center gap-2 my-5">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                        <path
                            d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                    </svg>
                    <input type="email" name='email' className="grow" placeholder="Email" />
                </label>
                {/* <label className="input input-bordered flex items-center gap-2 my-5">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                    </svg>
                    <input type="text" className="grow" placeholder="Username" />
                </label> */}
                <label className="input input-bordered flex items-center gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            fillRule="evenodd"
                            d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                            clipRule="evenodd" />
                    </svg>

                    <div className='relative'>
                        <input
                            type={isVisible ? 'text' : 'password'} className="grow w-[90%]"
                            placeholder='Password'
                            name='password' required />
                        <button
                            onClick={() => setIsVisible(!isVisible)}
                            className='btn btn-xs absolute -right-[14.5rem]'>
                            {
                                isVisible ? <FaEye /> : <FaEyeSlash />
                            }
                        </button>
                    </div>
                </label>
                <div className="form-control">
                    <label className="label justify-start gap-4 items-center cursor-pointer">
                        <input type="checkbox" name='terms' className="checkbox" />
                        <span className="label-text">Accept our terms and condition </span>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary" onClick={() => document.getElementById('my_modal_5').showModal()}>Login</button>
                </div>
                {/* {
                    error && <p className='text-center font-medium text-red-500 my-5' m-3>{error}</p>
                } */}
                {/* {
                    success && <p className='font-medium text-green-600 text-center'> Successfully Submitted</p>
                } */}
                <p className='py-3 m-4 font-medium'>Already have an account ? Please <Link className='underline text-green-500 mx-2' to='/login'>Log in</Link></p>
            </form>

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
    )
}

Register.propTypes = {}

export default Register