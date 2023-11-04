import { auth, provider } from '../firebase'
import { signInWithPopup } from 'firebase/auth'
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
