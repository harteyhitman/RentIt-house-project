import { auth, googleProvider } from "./config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut
} from "firebase/auth";
import { useState } from "react";
import google from './google.png'

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");




  const signIn = async (e) => {
    try {
      e.preventDefault();
      await createUserWithEmailAndPassword(auth, email, password); 
    } catch (err) {
      console.error(err);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };




  return (
    <form  onSubmit={signIn}>
    <div className="login-form">
      <input
        className="auth-input"
        placeholder="Email..."
        onChange={(e) => setEmail(e.target.value) }
        value={email}
      />
      <input
        className="auth-input"
        placeholder="Password..."
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button className="auth-btn signin" type="submit" onClick={signIn}> Sign In</button>
      <button className="auth-btn signin with google" onClick={signInWithGoogle}><img className="google" src={google} alt="" /> Sign In With Google</button>
      <button className="auth-btn logout" onClick={logout}> Logout </button>
    </div>
    </form>
  );
};

export default Auth


