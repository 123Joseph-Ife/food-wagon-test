import { useSignIn } from "../hooks/useSignIn";

const Login = () => {
  const { signInWithEmail, signInWithGoogle, setEmail, setPass, email, pass } =
    useSignIn();

  return (
    <div className="login-container">
      <div className="Login">
        <h1>Create Your Free Account</h1>
        <form className="login-form" onSubmit={(e) => e.preventDefault()}>
          <div className="email-container">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="text"
              placeholder="Enter your email here"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="email"
              required
            />
          </div>
          <div className="pass-container">
            <label htmlFor="pass">Password</label>
            <input
              id="pass"
              type="password"
              placeholder="Enter your password here"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              aria-label="email"
              required
            />
          </div>
          <button
            onClick={() => {
              signInWithEmail();
            }}
            className="create-button"
          >
            Create Account
          </button>
          <p>-OR-</p>
          <button
            onClick={() => {
              signInWithGoogle();
            }}
            className="google-btn"
          >
            <img src="\google.png" alt="Google Logo" width="30px" />
            <span>sign up with google</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
