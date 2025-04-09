//new
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signupUser } from "../Redux/Slice/authSlice";
import { useNavigate } from "react-router-dom";


const Signin = () => {
  const dispatch = useDispatch();
  const [file, setFile] = useState();
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password:"",
    address: "",
    phone: "",
    image: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) {
      alert("plaese select image!!");
      return;
    }
    const form = new FormData();
    form.append("img", file);
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("phone", formData.phone);
    form.append("password", formData.password);
    form.append("address", formData.address);

    dispatch(signupUser(form));
    alert("Signup successful!");
    navigate("/login");
  };


;
  
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="border p-4 rounded shadow-lg w-25">
        <h2 className="text-center mb-4">Signup</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleChange}
              value={formData.name}
              required
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              value={formData.email}
              required
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              value={formData.password}
              required
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="address"
              placeholder="Address"
              onChange={handleChange}
              value={formData.address}
              required
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              onChange={handleChange}
              value={formData.phone}
              required
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <input
              type="file"
              name="img"
              className="form-control"
              onChange={(event) => {
                const imageFile = event.target.files[0];
                setFile(imageFile);
              }}
            />
          </div>
          <div className="mb-3">
            <button type="submit" className="btn btn-primary w-100">
              Sign Up
            </button>
          </div>
        </form>
        <p className="text-center mt-3">
          {" "}
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Signin;





// //old
// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const Signin = () => {
//     const [formUserData, setUserFormData] = useState({
//         name: "",
//         email: "",
//         password: "",
//         phone: "",
//         address: "",
//         image: ""
//     });
//     const [file,setFile] = useState(null)

//     const navigate = useNavigate();

//     const handleChange = (e) => {
//         setUserFormData({ ...formUserData, [e.target.name]: e.target.value });
//     };

//     //img upload
//    const  handlefileChange = async(event) =>{
//          let imageFile = event.target.files[0]
//          setFile(imageFile);
//    }

//     const handleSubmit = async(e) => {
//         e.preventDefault();

//         if(!file){
//             alert('plaese select image!!')
//             return
//         }
//         const formData = new FormData()
//         formData.append("img", file)
//         formData.append("name", formUserData.name)
//         formData.append("email", formUserData.email)
//         formData.append("phone", formUserData.phone)
//         formData.append("password", formUserData.password)
//         formData.append("address", formUserData.address)

//         try {
//          await axios.post("http://localhost:5000/api/signup",formData);
//             alert("Signup successful!");
//             navigate("/login");

//         } catch (error) {
//             console.log("error occur",error);

//         }

//     };

//     return (
//         <div className="d-flex justify-content-center align-items-center vh-100">
//             <div className="border p-4 rounded shadow-lg w-25">
//                 <h2 className="text-center mb-4">Signup</h2>
//                 <form onSubmit={handleSubmit} >
//                     <div className="mb-3">
//                         <input
//                             type="text"
//                             name="name"
//                             className="form-control"
//                             placeholder="Name"
//                             onChange={handleChange}
//                             value={formUserData.name}
//                             required
//                         />
//                     </div>
//                     <div className="mb-3">
//                         <input
//                             type="email"
//                             name="email"
//                             className="form-control"
//                             placeholder="Email"
//                             onChange={handleChange}
//                             value={formUserData.email}
//                             required
//                         />
//                     </div>
//                     <div className="mb-3">
//                         <input
//                             type="password"
//                             name="password"
//                             className="form-control"
//                             placeholder="Password"
//                             onChange={handleChange}
//                             value={formUserData.password}
//                             required
//                         />
//                     </div>
//                     <div className="mb-3">
//                         <input
//                             type="text"
//                             name="phone"
//                             className="form-control"
//                             placeholder="Phone (optional)"
//                             onChange={handleChange}
//                             value={formUserData.phone}
//                             required
//                         />
//                     </div>
//                     <div className="mb-3">
//                         <input
//                             type="text"
//                             name="address"
//                             className="form-control"
//                             placeholder="Address"
//                             onChange={handleChange}
//                             value={formUserData.address}
//                             required
//                         />
//                     </div>
//                     <div className="mb-3">
//                         <input
//                             type="file"
//                             name='img'
//                             className="form-control"
//                             onChange={handlefileChange}
//                         />

//                     </div>
//                     <button type="submit" className="btn btn-primary w-100" >
//                         Signup
//                     </button>
//                 </form>
//                 <p className="text-center mt-3">
//                     Already have an account? <a href="/login">Login</a>
//                 </p>
//             </div>
//         </div>
//     );
// };

// export default Signin;
