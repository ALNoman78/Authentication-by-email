import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import auth from '../../firebase/firebase.init'

const SignUp = () => {
    const [user, setUser] = useState(null)
    const [success , setSuccess] = useState(false)
    const [error, setError] = useState('')

    const handleSignUp = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(password)

        // password validation

        if(password.length < 6){
            setError('Password should be 6 character or longer');
            return;
        }

        // password special character validation

        const passwordRegex = /^(?=.*[a-z]) (?=.*[A-Z]) (?=.*\d) (?=.*[@$!%*?&]) [A-Za-z\d@$!%*?&]{6,}$/;

        if(!passwordRegex.test(password)){
            setError('At least one upperCase , one lowercase , one number , one special character')
            return;
        }

        //empty error
        setError('')
        setSuccess(false)

        // sing in with authentication 
        createUserWithEmailAndPassword(auth , email , password)
            .then((result) => {
                setUser(result.user)
                // success message
                setSuccess(true)
                console.log(result.user)
            })
            .catch(error => {
                setError(error.message)
                setSuccess(false)
            })
        console.log('clicked Sign Up')
    }
    return (
        <div>
            <h2>This is Sign Up</h2>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSignUp} className="card-body">
                        <h3 className='text-center text-2xl font-bold'>Sign Up Form</h3>
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
                            <button className="btn btn-primary">Sign up</button>
                        </div>
                            {
                                error && <p className='text-center font-medium text-red-600'>
                                    {
                                        error
                                    }
                                </p>
                            }
                            {
                                success && <p className='text-green-600 text-center font-medium'>Sign Up is Success</p>
                            }
                    </form>
                </div>
            </div>
        </div>
    )
}

SignUp.propTypes = {}

export default SignUp