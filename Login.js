//new
import React, { useState } from 'react';
import { useDispatch} from 'react-redux';
import { loginUser } from '../Redux/Slice/authSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate()
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email: formData.email , password : formData.password}))
    navigate("/profile")
  };
// console.log("----->formData",formData);

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
          <div className="border p-4 rounded shadow-lg w-25">
          <h2 className="text-center mb-4">Login</h2>
          <form onSubmit={handleSubmit}>
              <div className="mb-3">
                  <input type="email" name="email" placeholder="Email" onChange={handleChange} value={formData.email} required  className="form-control" />
                  </div>
                  <div className="mb-3">
                  <input type="password" name="password" placeholder="Password" onChange={handleChange}  value={formData.password} required  className="form-control" />
                  </div>
                  <div className="mb-3">
                  {/* <button type="submit" className="btn btn-primary w-100">Login</button> */}
                  <button type="submit" className="btn btn-primary w-100" onClick={handleSubmit}>
                       login
                    </button>
                 
                  </div>
         </form>
          <p className="text-center mt-3">
                Don't have an account? <a href="/">Signup</a>
          </p>
    </div>
    </div>
  );
};

export default Login;















// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { updateUserProfile } from "../Redux/Slice/UserSlice";

// const Login = () => {
//     const [formUserData, setUserFormData] = useState({ email: "", password: "" });
 

// //add upcomong :::::: ///////////////
// const dispatch = useDispatch();
// const { user, loading, error, isEditing } = useSelector((state) => state.user);

//   useEffect(() => {
//     setUserFormData({ ...user });
//   }, [user]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUserFormData({
//       ...formUserData,
//       [name]: value
//     });
//   };

//  const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(updateUserProfile(formUserData));
//   };
//   /////////////////////:::::
//     // const handleChange = (e) => {
//     //     setUserFormData({ ...formUserData, [e.target.name]: e.target.value });
//     // };

//     // const handleSubmit = async (e) => {
//     //     e.preventDefault();
//     //     try {
//     //         const response = await axios.post("http://localhost:5000/api/login", user);

//     //         localStorage.setItem("token", response.data.token);
//     //         alert("Login successful!");
//     //         navigate("/dashboard");
//     //     } catch (error) {
//     //         console.log(error);
            
//     //     }
//     // };

//     return (
//         <div className="d-flex justify-content-center align-items-center vh-100">
//             <div className="border p-4 rounded shadow-lg w-25">
//                 <h2 className="text-center mb-4">Login</h2>
//                <form onSubmit={handleSubmit}>
//                     <div className="mb-3">
//                         <input type="email" name="email"  className="form-control" placeholder="Email" onChange={handleChange} required />
//                     </div>
//                     <div className="mb-3">
//                         <input type="password" name="password"   className="form-control" placeholder="Password" onChange={handleChange} required />
//                     </div>
//                     <button type="submit" className="btn btn-primary w-100">Login</button>
//                 </form>
//                 <p className="text-center mt-3">
//                     Don't have an account? <a href="/">Signup</a>
//                 </p>
//             </div>
//         </div>
//     );
// };

// export default Login;