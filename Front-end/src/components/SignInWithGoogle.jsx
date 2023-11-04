import { auth, provider } from '../firebase'
import { signInWithPopup } from 'firebase/auth'
import axios from 'axios'
const SignInWithGoogle = () => {
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const name = result.user.displayName
        const email = result.user.email
        const profilePic = result.user.photoURL

        localStorage.setItem('name', name)
        localStorage.setItem('email', email)
        localStorage.setItem('profilePic', profilePic)
        
        const newObj={
          name:name,
          email:email
        }
        const send = async () => {
          const resp = await axios.post(
            "http://localhost:8000/addUser",
            {
              body: newObj,
            }
          
          );
          resp();
          
        };
        send();
      })
      .catch((error) => {
        console.log(error)
      })
  }
  return (
    <button
      type="button"
      className="login-with-google-btn"
      onClick={signInWithGoogle}
    >
      Sign in with Google
    </button>
  )
}
export default SignInWithGoogle
