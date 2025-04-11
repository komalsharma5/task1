
// update by states
// import { useSelector, useDispatch } from 'react-redux';
// import { useEffect, useState } from "react";
// import { logoutUser } from '../Redux/Slice/authSlice';
// import { useNavigate } from 'react-router-dom';


// const Dashbord = () => {


//   const { user }  = useSelector((state) => state.auth);
//   const [editing,setEditing] = useState(false)
//   const [formData, setFormData] = useState({ ...user });
//   const [file, setFile] = useState()
//   const dispatch = useDispatch();
//   const navigate = useNavigate()


//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   useEffect(() => {
//     setFormData({ ...user });
//   }, [user]);

  
//   const handleLogout = (e) => {
//     e.preventDefault();
//     dispatch(logoutUser()); 
//     alert("Logout Successfully")
//     navigate("/login")
//   };

  

//   return (
//      <>
     
//         <div className="container mt-5">
//         <div className="row justify-content-center">
//           <div className="col-md-8">
//             <div className="card shadow">
//               <div className="card-header bg-primary text-white">
//                 <h2 className="mb-0 text-center">User Profile</h2>
//               </div>
  
//               <div className="card-body">
//                 <form onSubmit={(e)=>{
//                   e.preventDefault();
//                   setEditing(!editing)
//                 }}>
               
                  
//                     <div className="col-md-4 text-center">
//                       <img
//                          src={`http://localhost:5000/uploads/${formData.image}`}
//                         alt="Profile"
//                         className="w-100 h-100 rounded-full .img-fluid img-thumbnail" onChange={(event) => {
//                           const imageFile = event.target.files[0];
//                           setFile(imageFile);}}
//                       />
                     
                       
//                     </div>
                  
//                       <div className="mb-3">
//                         <label className="form-label">Name</label>
//                         {
//                           editing ? ( <input
//                             type="text"
//                             className="form-control"
//                             name="name"
//                             value={formData?.name}
//                             onChange={handleChange}
                          
//                           />) : (
//                             <h4>{formData?.name}</h4>
//                           )
//                         }
                       
//                       </div>
  
//                       <div className="mb-3">
//                         <label className="form-label">Email</label>
//                         {
//                           editing ? (
//                             <input
//                             type="email"
//                             className="form-control"
//                             name="email"
//                             value={formData?.email}
//                             onChange={handleChange}
//                           />
//                           ) : (
//                             <h4>{formData?.email}</h4>
//                           )
//                         }
                       
//                       </div>
  
//                       <div className="mb-3">
//                         <label className="form-label">Phone Number</label>
//                         {
//                           editing ? (
//                             <input
//                             type="tel"
//                              className="form-control"
//                             name="phone"
//                             value={formData?.phone}
//                             onChange={handleChange}
                        
//                           />
//                           ) : (
//                             <h4>{formData?.phone}</h4>
//                           )
//                         }
//                       </div>
                    
  
//                   <div className="mb-3">
//                     <label className="form-label">Address</label>
//                     {
//                       editing ? (
//                         <input
//                         type="text"
//                         className="form-control"
//                         name="address"
//                         value={formData?.address}
//                         onChange={handleChange}
                      
//                       />
//                       ) : (
//                         <h4>{formData?.address}</h4>
//                       )
//                     }
                   
//                   </div>
//                   <div className="mb-3">
//                     <button type='submit' className="btn btn-success w-100">
//                       {editing ? "Update" : "Edit"} User
//                     </button>
//                   </div>
                 
                  
//                 </form>
//                 <div className="mb-3">
//                     <button onClick={handleLogout} className="btn btn-danger w-100">
//                       Logout
//                     </button>
//                   </div>
//               </div>
//             </div>
//           </div>
//           </div>
//           </div>
//     </>

//   )}

// export default Dashbord;





//update with api
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from "react";
import { logoutUser, updateProfile } from '../Redux/Slice/authSlice';
import { useNavigate } from 'react-router-dom';


const Dashbord = () => {
  const { user }  = useSelector((state) => state.auth);
  const [isediting,setIsEditing] = useState(false)
  const [formData, setFormData] = useState({ ...user });
  const dispatch = useDispatch();
  const navigate = useNavigate()


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setFormData({ ...user });
  }, [user]);

  
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logoutUser()); 
    alert("Logout Successfully")
    navigate("/login")
  };


  const updateHandler = (e) => {
    e.preventDefault();
    const updatedData = new FormData();
    updatedData.append("_id", formData._id);
    updatedData.append("name", formData.name);
    updatedData.append("email", formData.email);
    updatedData.append("phone", formData.phone);
    updatedData.append("address", formData.address);
    dispatch(updateProfile(updatedData));
 
  };
  

  return (
     <>
        <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card shadow">
              <div className="card-header bg-primary text-white">
                <h2 className="mb-0 text-center">User Profile</h2>
              </div>
  
              <div className="card-body">
                <form onSubmit={(e)=>{
                      e.preventDefault();
                      setIsEditing(!isediting)
                      }}>
                    <div className="col-md-4 text-center">
          
                      <img
                         src={`http://localhost:5000/uploads/${formData.image}`}
                        alt="Profile"
                        className="w-100 h-100 rounded-full .img-fluid img-thumbnail" 
                      />
                     
                       
                    </div>
                  
                      <div className="mb-3">
                        <label className="form-label">Name</label>
                        {
                          isediting ? ( <input
                            type="text"
                            className="form-control"
                            name="name"
                            value={formData?.name}
                            onChange={handleChange}
                          
                          />) : (
                            <h4>{formData?.name}</h4>
                          )
                        }
                      </div>
  
                      <div className="mb-3">
                        <label className="form-label">Email</label>
                        {
                          isediting ? (
                            <input
                            type="email"
                            className="form-control"
                            name="email"
                            value={formData?.email}
                            onChange={handleChange}
                          />
                          ) : (
                            <h4>{formData?.email}</h4>
                          )
                        }
                      </div>
  
                      <div className="mb-3">
                        <label className="form-label">Phone Number</label>
                        {
                          isediting ? (
                            <input
                            type="tel"
                             className="form-control"
                            name="phone"
                            value={formData?.phone}
                            onChange={handleChange}
                        
                          />
                          ) : (
                            <h4>{formData?.phone}</h4>
                          )
                        }
                      </div>
                    
  
                  <div className="mb-3">
                    <label className="form-label">Address</label>
                    {
                      isediting ? (
                        <input
                        type="text"
                        className="form-control"
                        name="address"
                        value={formData?.address}
                        onChange={handleChange}
                      
                      />
                      ) : (
                        <h4>{formData?.address}</h4>
                      )
                    }
                  </div>
                  <div className="mb-3">
                    <button type='btn'  className="btn btn-info w-100">
                    {isediting ? "...Typing"  : "Edit"} User
                    </button>
                  </div>
                  <div className="mb-3">
                        <button   onClick={updateHandler} className="btn btn-success w-100">
                            Update  User
                       </button>
                    </div>
                  
                </form>
                <div className="mb-3">
                    <button onClick={handleLogout} className="btn btn-danger w-100">
                      Logout
                    </button>
                  </div>
              </div>
            </div>
          </div>
          </div>
          </div>
    </>

  )}

export default Dashbord;











//update with api
// import { useSelector, useDispatch } from 'react-redux';
// import { useEffect, useState } from "react";
// import { logoutUser, updateProfile } from '../Redux/Slice/authSlice';
// import { useNavigate } from 'react-router-dom';


// const Dashbord = () => {


//   const { user }  = useSelector((state) => state.auth);
//   const [isediting,setIsEditing] = useState(false)
//   const [formData, setFormData] = useState({ ...user });
//   const dispatch = useDispatch();
//   const navigate = useNavigate()


//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   useEffect(() => {
//     setFormData({ ...user });
//   }, [user]);

  
//   const handleLogout = (e) => {
//     e.preventDefault();
//     dispatch(logoutUser()); 
//     alert("Logout Successfully")
//     navigate("/login")
//   };


//   const updateHandler = (e) => {
//     e.preventDefault();
  
//     const updatedData = new FormData();
//     updatedData.append("_id", formData._id);
//     updatedData.append("name", formData.name);
//     updatedData.append("email", formData.email);
//     updatedData.append("phone", formData.phone);
//     updatedData.append("address", formData.address);
  
//     dispatch(updateProfile(updatedData));
//     alert("Profile updated successfully");
//   };
  

//   return (
//      <>
     
//         <div className="container mt-5">
//         <div className="row justify-content-center">
//           <div className="col-md-8">
//             <div className="card shadow">
//               <div className="card-header bg-primary text-white">
//                 <h2 className="mb-0 text-center">User Profile</h2>
//               </div>
  
//               <div className="card-body">
//                 <form onSubmit={(e)=>{
//                   e.preventDefault();
//                   setIsEditing(!isediting)
//                 }}>
               
                  
//                     <div className="col-md-4 text-center">
//                     {/* <input 
//                         type="file" 
//                         accept="image/*" 
//                         className="form-control"
//                       /> */}

//                       <img
//                          src={`http://localhost:5000/uploads/${formData.image}`}
//                         alt="Profile"
//                         className="w-100 h-100 rounded-full .img-fluid img-thumbnail" 
//                       />
                     
                       
//                     </div>
                  
//                       <div className="mb-3">
//                         <label className="form-label">Name</label>
//                         <input
//                           type="text"
//                           className="form-control"
//                           name="name"
//                           value={formData?.name}
//                           onChange={handleChange}
                        
//                         />
//                       </div>
  
//                       <div className="mb-3">
//                         <label className="form-label">Email</label>
//                         <input
//                           type="email"
//                           className="form-control"
//                           name="email"
//                           value={formData?.email}
//                           onChange={handleChange}
//                         />
//                       </div>
  
//                       <div className="mb-3">
//                         <label className="form-label">Phone Number</label>
//                         <input
//                           type="tel"
//                            className="form-control"
//                           name="phone"
//                           value={formData?.phone}
//                           onChange={handleChange}
                      
//                         />
//                       </div>
                    
  
//                   <div className="mb-3">
//                     <label className="form-label">Address</label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       name="address"
//                       value={formData?.address}
//                       onChange={handleChange}
                    
//                     />
//                   </div>
//                   <div className="mb-3">
//                     <button  onClick={updateHandler} className="btn btn-success w-100">
//                       Update
//                     </button>
//                   </div>
                 
                  
//                 </form>
//                 <div className="mb-3">
//                     <button onClick={handleLogout} className="btn btn-danger w-100">
//                       Logout
//                     </button>
//                   </div>
//               </div>
//             </div>
//           </div>
//           </div>
//           </div>
//     </>

//   )}

// export default Dashbord;














// //old code
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";


// const Dashbord = () => {
//   const navigate = useNavigate();
//   const [user, setUser] = useState()
 

//   // //button logout code
//   const handleLogout = () => {
//     axios
//       .get("http://localhost:5000/api/logout")
//       .then(() => {
//         localStorage.removeItem("token");
//         navigate("/login");
//       })
//       .catch((error) => console.error("Logout error:", error));
//   };

//   useEffect(() => {
//     const fetchUserProfile = () => {
//       const token = localStorage.getItem("token");
//       if (token) {
//          axios.get(
//           "http://localhost:5000/api/profile",
//           {
//             headers: { "Authorization": token },
//           }
//         ).then((response)=>{
//             setUser(response.data);
//         });
        
//       }
//     };
//     fetchUserProfile();
//   }, []);

 
//   return (
//     <>
//       <h2 className="text-center my-5">Welcome to dashbord</h2>
   
//       {
//         user &&
      
//       <div className="border border-2 w-50 d-block text-center mx-auto">
//             <img src={`http://localhost:5000/uploads/${user.image}`} alt="Profile" className="w-100 h-100 p-5 rounded-5"  />
                    

//             <p>Name: {user.name}</p>


//             <p>Email: {user.email}</p>
//             <p>Phone: {user.phone}</p>
//             <p>Address: {user.address}</p>
//             <button
//                 onClick={handleLogout}
//                 className="btn btn-primary mx-auto text-center d-block my-5"
//             >
//                 Logout
//             </button> 
//       </div>
// }
     
//     </>
//   );
// };

// export default Dashbord;



