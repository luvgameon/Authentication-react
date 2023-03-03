import classes from './ProfileForm.module.css';
import { useContext, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import AuthContext from '../../store/auth-context';

const ProfileForm = () => {
  const passref=useRef();
  const contextctx=useContext(AuthContext);
  const history=useHistory();
  const Submithandler=async (event)=>{
    event.preventDefault();
    
    const userpass=passref.current.value;
    
    const respose = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDW55X8yrfY3DYfPEVnvQZamzWMl7FuhzE",
      {
        method: "POST",
        body: JSON.stringify({
          idToken:contextctx.token,
          password:userpass,
          returnSecureToken:false
        }),
        headers: {
          "Content-type": "application/json",
        },
      }
      );
      // const data = await respose.json();
      console.log('hogya Update')
      history.replace('/');

  }
  
  
  return (
    <form className={classes.form}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' ref={passref} />
      </div>
      <div className={classes.action}>
        <button onClick={Submithandler}>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
