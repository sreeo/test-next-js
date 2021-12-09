import type { NextPage } from 'next'

const LoginPage: NextPage = () => {
  return (
    <div>
      <h3 data-test-id="pageTitle">Login</h3>
      <input placeholder="Enter your email" data-test-id="emailInput" />
      <input placeholder="Enter your password" data-test-id="passwordInput" />
      <button data-test-id="loginButton">Continue</button>
      <button data-test-id="signInWithGoogle">Continue with Google</button>
      <button className="bg-success-500" data-test-id="signInWithFacebook">
        Continue with Facebook
      </button>
    </div>
  )
}

export default LoginPage
