import "./register.css";
import { useRef } from "react";
import { useHistory, Link } from "react-router-dom";
import axios from "axios";

export default function Register() {
    
const reactbaseUrl = process.env.REACT_APP_BASE_URL;
  const usernameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const passwordAgainRef = useRef("");
  const history = useHistory();

  const handleRegister = async (event) => {
    event.preventDefault();
    if (passwordAgainRef.current.value !== passwordRef.current.value) {
      passwordAgainRef.current.setCustomValidity("Both Password Must Match!");
    } else {
      const user = {
        username: usernameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
        passwordAgain: passwordAgainRef.current.value,
      };

       console.log(user);
      try {
        await axios.post(`${reactbaseUrl}/auth/register`, user);
        history.push("/login");
      } catch (err) {
        console.log(err);
      }
    }
    history.push("/login");
  };
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Sha1Social</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Sha1social.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleRegister}>
            <input
              placeholder="Username"
              className="loginInput"
              type="text"
              required
              ref={usernameRef}
            />
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
              ref={passwordRef}
              required
              minLength="6"
            />
            <input
              placeholder="Password Again"
              className="loginInput"
              required
              type="password"
              ref={passwordAgainRef}
            />
            <button className="loginButton" type="submit">
              Sign Up
            </button>
            <Link to="/login" className="loginRegisterButton">
              <button className="loginRegisterButton">Log In</button>{" "}
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
