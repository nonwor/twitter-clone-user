import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import Modal from 'react-modal';

const Signup = () => {

  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')
  const[passwordConfirm, setPasswordConfirm] = useState('')

  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleForm = () =>{
    let emailCheck = false
    let passwordCheck = false
    let emailFormat = /\S+@\S+\.\S+/
    if(emailFormat.test(email)){
      console.log("valid email")
      emailCheck = true
    } else {
      console.log("not valid email")
    }

    if(password === passwordConfirm){
      if(password.length >= 3){
        passwordCheck = true
      }
      
    } else {
      console.log("password does not match")
    }
    if(emailCheck && passwordCheck){
      console.log(email, password, passwordConfirm)
      console.log("good to go")

      axios({
        method: "POST",
        url: "/users",
        data: {
          email:email,
          password:password,
          
        }
      }).then((result) => {
        
        console.log(result);
        if(result.status===200){
          setEmail("")
          setPassword("")
          setPasswordConfirm("")
          setIsOpen(true)
        }
       
      })
    } else {
      console.log("try again")
    }
  }

  return (
    <div>Signup
      {/* <input>email</input> */}
      <div>
        <form>
        <label>
            Email
            <input value={email} type="text" onChange={(event)=>setEmail(event.target.value)}/>
          </label>
          <label>
            Password
            <input value={password} type="password" onChange={(event)=>setPassword(event.target.value)} />
          </label>
          <label>
            Confirm Password
            <input value={passwordConfirm} type="password" onChange={(event)=>setPasswordConfirm(event.target.value)}/>
          </label>

          <input type="button" value="Submit" onClick={handleForm} />
        </form>
      </div>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Popup Modal"
        appElement={document.getElementById('root')}
      >
        <h2>Welcome to Fake Twitter!</h2>
        <p>Signup successful!</p>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>

  )
}

export default Signup