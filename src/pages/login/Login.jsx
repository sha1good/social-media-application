import "./login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Sha1Social</h3>
          <span className="loginDescription">
            Connect with friends and the world around you on Sha1social.
          </span>
        </div>
        <div className="loginRight">
            <div className="loginBox">
                <input  placeholder="Email" className="loginInput"/>
                <input  placeholder="Password" className="loginInput"/>
                <button className="loginButton">Log in</button>
                 <span className="loginForgot">Forgot Password ?</span>
                 <button className="loginRegistrationButton">Create a New Account</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
