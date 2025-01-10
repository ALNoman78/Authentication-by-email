import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { signInWithEmailAndPassword } from 'firebase/auth'
import auth from '../../firebase/firebase.init'

const SignUp = () => {
    const [user, setUser] = useState(null)
    const [error, setError] = useState('')

    const handleSignUp = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        // sing in with authentication 
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user)
            })
            .catch(error => {
                setError(error.message)
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
                        <p className='text-center font-medium text-lg'>
                            {
                                error
                            }
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

SignUp.propTypes = {}

export default SignUp