import "./login.css";
import { loginCall } from "../../apiCalls";
import { useContext, useRef } from "react";
import { CircularProgress } from "@material-ui/core";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const { loading, dispatch } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    loginCall({ email : emailRef.current.value, password : passwordRef.current.value }, dispatch);
  };

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
          <form className="loginBox" onSubmit={handleSubmit}>
            <input
              placeholder="Email"
              className="loginInput"
              type="email"
              ref={emailRef}
              required
            />
            <input
              placeholder="Password"
              className="loginInput"
              type="password"
              minLength="6"
              ref={passwordRef}
              required
            />
            <button className="loginButton" type="submit" disabled={loading}>
              {loading ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Log in"
              )}
            </button>
            <span className="loginForgot">Forgot Password ?</span>
            <button className="loginRegistrationButton" type="button">
              {loading ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Create a New Account"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
