import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useContext, useRef, useState } from "react";
import { UserContext } from "./AuthContext";
import Swal from 'sweetalert2'


const Login = () => {
     const navigate = useNavigate();
     const location = useLocation();
     const { userLogin, loginWithGoogle } = useContext(UserContext);
     const [alram, setAlram] = useState(null);
     const [show, setShow] = useState(false);
     const handleShow = () => {

          setShow(!show)
     }
     const isStrongPassword = (password) => {

          const regex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{6,}$/;
          return regex.test(password);
     };

     const emailRef = useRef(null);
     const passwordRef = useRef(null);
     const handleGoogle= ()=>{
          loginWithGoogle()
          .then(()=>{
               Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Login Successful!',
                    showConfirmButton: false,
                    timer: 1500
                  })
               navigate(location?.state? location.state : '/');
          })
          .catch((err) => {
               setAlram(err.message);
               
          })
     }
     const handleSubmit = e => {
          e.preventDefault();
          const email = e.target.email.value;
          const password = e.target.password.value;

          if (!isStrongPassword(password)) {
               return Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Password must contain at least one capital letter one number and a special character.',
                  })

          } else {
               userLogin(email, password)
                    .then(() => {
                         Swal.fire({
                              position: 'center',
                              icon: 'success',
                              title: 'Login Successful!',
                              showConfirmButton: false,
                              timer: 1500
                            })
                         
                         navigate(location?.state? location.state : '/');


                         emailRef.current.value = '';
                         passwordRef.current.value = '';
                         setAlram('')
                    })
                    .catch((err) => {
                         setAlram(err.message);
                         
                    })
          }


     }
     return (
          <div className="flex min-h-screen items-center mx-auto">
               <div className=" w-11/12 md:w-[500px] mx-auto">
                    <div>
                         <form onSubmit={handleSubmit}>
                              <input ref={emailRef} className="border p-2 w-full" type="email" name="email" placeholder="Email..." required />

                              <div className="relative">
                                   <input ref={passwordRef} className="border p-2 w-full my-4"
                                        type={show ? "text" : "password"}
                                        name="password"
                                        placeholder="Password..." required />
                                   <span className="absolute top-6 right-2"><button className="text-xl"
                                        onClick={(e) => {
                                             e.preventDefault();
                                             handleShow();
                                        }}>{show ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}</button></span>
                              </div>
                              <input className="border p-2 w-full bg-green-400" type="submit" value="Login" />
                         </form>
                         <div className="flex justify-between">
                              <p>If you have no account? Please <Link className="text-blue-800" to={'/registration'}>Registration</Link></p>
                         </div>
                    </div>
                    {
                         alram ? <p className="text-red-600">{alram}</p> : ''
                    }

                    <div className="mt-3">
                         <button onClick={handleGoogle} className="w-full py-2 border rounded-md text-lg font-medium">Login with Google</button>
                    </div>
               </div>

          </div>
     );
};

export default Login;