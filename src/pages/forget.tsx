/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { getAuth, sendPasswordResetEmail } from 'firebase/auth'
import { ToastContainer, toast } from 'react-toastify'
import ArrowRightIcon from '../assets/svg/keyboardArrowRightIcon.svg'

function ForgotPassword() {
  const [email, setEmail] = useState<string>('')

  const onChange = (e:any) => setEmail(e.target.value)

  const onSubmit = async (e:any) => {
    e.preventDefault()
    try {
      const auth = getAuth()
      await sendPasswordResetEmail(auth, email)
      toast.success('Email was sent')
    } catch (error) {
      toast.error('Could not send reset email')
    }
  }

  return (
    <div className='pageContainer'>
      <header>
        <p className='pageHeader'>Forgot Password</p>
      </header>

      <main>
        <form onSubmit={onSubmit}>
          <input
            type='email'
            className='emailInput'
            placeholder='Email'
            id='email'
            value={email}
            onChange={onChange}
          />
          <Link className='forgotPasswordLink' to='/login'>
            Sign In
          </Link>

          <div className='signInBar'>
            <div className='signInText'>Send Reset Link</div>
            <button className='signInButton'>
              <img src={ArrowRightIcon} width='34px' height='34px' />
            </button>
          </div>
        </form>
      </main>
      <ToastContainer />
    </div>
  )
}

export default ForgotPassword