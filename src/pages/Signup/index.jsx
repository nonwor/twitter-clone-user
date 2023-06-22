import React from 'react'
import { useState, useEffect } from 'react'

const Signup = () => {

  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')
  const[passwordConfirm, serPasswordConfirm] = useState('')

  
  const handleForm = () =>{

  }

  return (
    <div>Signup
      {/* <input>email</input> */}
      <div>
        <form>
        <label>
            Email
            <input type="text" />
          </label>
          <label>
            Password
            <input type="password" />
          </label>
          <label>
            Confirm Password
            <input type="password" />
          </label>

          <input type="button" value="Submit" onClick={handleForm} />
        </form>
      </div>
    </div>

  )
}

export default Signup