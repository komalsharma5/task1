 //new

import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from "react";
import { logoutUser } from '../Redux/Slice/authSlice';
import { Link } from 'react-router-dom';





const Dashbord = () => {


  const { user } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({ ...user });
  const dispatch = useDispatch();

  useEffect(() => {
    setFormData({ ...user });
  }, [user]);

  
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logoutUser()); 
    alert("Logout Successfully")
  };
 console.log("dashord page render");
 
  return (
     <>
     
      {
      formData? (
        <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card shadow">
              <div className="card-header bg-primary text-white">
                <h2 className="mb-0">User Profile</h2>
              </div>
  
              <div className="card-body">
            
                <div className="alert alert-danger alert-dismissible fade show" role="alert">
                  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                  Example alert message (optional).
                </div>
  
              
                <form>
                  <div className="row mb-4">
                  
                    <div className="col-md-4 text-center">
                      <img
                         src={`http://localhost:5000/uploads/${formData.image}`}
                        alt="Profile"
                        className="w-100 h-100 p-5 rounded-5"
                      />
                    
  
              
                    <div className="col-md-8">
                      <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          value={formData?.name || "NA"}
                       
                        
                        />
                      </div>
  
                      <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          value={formData?.email || "NA"}
                        
                          disabled
                        />
                      </div>
  
                      <div className="mb-3">
                        <label className="form-label">Phone Number</label>
                        <input
                          type="tel"
                          className="form-control"
                          name="mobile"
                          value={formData?.phone || "NA"}
                        
                      
                        />
                      </div>
                    </div>
                  </div>
  
                  <div className="mb-3">
                    <label className="form-label">Address</label>
                    <input
                      type="text"
                      className="form-control"
                      name="address"
                      value={formData?.address || "NA"}
                     
                    
                    />
                  </div>
                  <div className="mb-3">
                    <button onClick={handleLogout} className="btn btn-danger w-100">
                      Logout
                    </button>
                  </div>
                  </div> 
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      ) : <Link to='/login' className='btn btn-primary btn-md'>Login</Link>
     } 
        
    </>

  )}

export default Dashbord;





























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



