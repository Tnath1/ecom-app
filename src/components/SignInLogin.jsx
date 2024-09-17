import React, { useState } from "react";
import "../components/css/signupLogin.css";
import { FaUserAlt } from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";

const SignInLogin = ({ isOpen, onClose }) => {
  const [action, setAction] = useState("Sign Up");
  const [name, setName] = useState("");
    const [errors, setErrors] = useState({});
  



  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };



  // Validation logic for name input
  const validateName = () => {
    if (!name.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: "Name is required",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: "",
      }));
    }
  };

  const handleSubmit = () => {
    validateName();
    // Add further validation or submission logic here
  };

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-content">
        <div className="header">
          <h2 className="text"> {action} </h2>
          <div className="underline"></div>
        </div>
        <div className="inputs">
        {action === "Login" ? null : (
          <div className="input">
            <FaUserAlt className="icon" />
            <input
              type="text"
              placeholder="Enter name"
              // value={name}
              // onChange={(e) => setName(e.target.value)}
              // onBlur={validateName} 
            />
            
          </div>
        )}
         {/* {errors.name && <p className="error">{errors.name}</p>} */}

          <div className="input">
            <AiTwotoneMail className="icon" />
            <input type="text" placeholder="enter email" />
          </div>
          <div className="input">
            <RiLockPasswordFill className="icon" />
            <input type="text" placeholder="enter password" />
          </div>
        </div>
        {action === "Sign Up" ? (
          <div></div>
        ) : (
          <div className="forgot_password">
            forgot password? <span>click here</span>
          </div>
        )}

        <div className="submit_container">
          <button
            className={action === "Sign Up" ? "submit " : "submit  gray "}
            onClick={() => {
              setAction("Sign Up");
            }}
          >
            Sign Up
          </button>
          <button
            className={action === "Login" ? "submit " : "submit  gray"}
            onClick={() => {
              setAction("Login");
            }}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignInLogin;


















// import React, { useState } from "react";
// import "../components/css/signupLogin.css";
// import { FaUserAlt } from "react-icons/fa";

// const SignInLogin = ({ isOpen, onClose }) => {
//   const [action, setAction] = useState("Sign Up");
//  
//   if (!isOpen) return null;

//   const handleBackdropClick = (e) => {
//     if (e.target === e.currentTarget) {
//       onClose();
//     }
//   };

//   // Validation logic for name input
//   const validateName = () => {
//     if (!name.trim()) {
//       setErrors((prevErrors) => ({
//         ...prevErrors,
//         name: "Name is required",
//       }));
//     } else {
//       setErrors((prevErrors) => ({
//         ...prevErrors,
//         name: "",
//       }));
//     }
//   };

//   const handleSubmit = () => {
//     validateName();
//     // Add further validation or submission logic here
//   };

//   return (
//     <div className="modal-backdrop" onClick={handleBackdropClick}>
//       <div className="modal-content">
//         <div className="header">
//           <h2 className="text"> {action} </h2>
//           <div className="underline"></div>
//         </div>

//         {action === "Login" ? null : (
//           <div className="input">
//             <FaUserAlt className="icon" />
//             <input
//               type="text"
//               placeholder="Enter name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               onBlur={validateName} // Validate when user leaves the input field
//             />
            
//           </div>
//         )}
//        

//         <div className="submit_container">
//           <button
//             className={action === "Sign Up" ? "submit" : "submit gray"}
//             onClick={() => setAction("Sign Up")}
//           >
//             Sign Up
//           </button>
//           <button
//             className={action === "Login" ? "submit" : "submit gray"}
//             onClick={() => setAction("Login")}
//           >
//             Login
//           </button>
//         </div>

//         <div className="submit_button">
//           <button onClick={handleSubmit}>Submit</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignInLogin;
