import { useEffect, useState } from "react";
import "../components/css/signupLogin.css";
import { FaUserAlt } from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";

const SignInLogin = ({ isOpen, onClose }) => {
  const [action, setAction] = useState("Login");

  useEffect(() => {
    if (isOpen) {
      setAction("Login");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-content">
        <div className="header">
          <h2 className="text">{action}</h2>
          <div className="underline"></div>
        </div>

        <div className="inputs">
          {action === "Sign Up" && (
            <div className="input">
              <FaUserAlt className="icon" />
              <input type="text" placeholder="Enter name" />
            </div>
          )}

          <div className="input">
            <AiTwotoneMail className="icon" />
            <input type="email" placeholder="Enter email" />
          </div>

          <div className="input">
            <RiLockPasswordFill className="icon" />
            <input type="password" placeholder="Enter password" />
          </div>
          {action === "Login" && (
            <div className="forgot_password">
              Forgot password? <span>Click here</span>
            </div>
          )}
        </div>

        <div className="submit_container">
          <button type="button" className="submit inactive-submit" disabled>
            {action}
          </button>
        </div>

        <div className="auth-switch-copy">
          {action === "Login"
            ? "Don't have an account?"
            : "Already have an account?"}
          <span
            className="auth-switch-button"
            role="button"
            tabIndex={0}
            onClick={() =>
              setAction(action === "Login" ? "Sign Up" : "Login")
            }
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                setAction(action === "Login" ? "Sign Up" : "Login");
              }
            }}
          >
            {action === "Login" ? "Sign Up" : "Login"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignInLogin;
