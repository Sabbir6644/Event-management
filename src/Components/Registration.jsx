import { useContext, useRef, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { UserContext } from "./AuthContext";
import Swal from 'sweetalert2'



const Registration = () => {
     const { createUser } = useContext(UserContext);
     // console.log(createUser);
     const [alram, setAlram] = useState(null);
     const [show, setShow] = useState(false);
     const handleShow = () => {
          setShow(!show)
     }
     const nameRef = useRef(null);
     const imageRef = useRef(null);
     const emailRef = useRef(null);
     const passwordRef = useRef(null);

     const isStrongPassword = (password) => {
          // Regex pattern for at least one capital letter and one number
          const regex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{6,}$/;
          return regex.test(password);
     };

     const handleSubmit = e => {
          e.preventDefault();
          const name = e.target.name.value;
          const imageUrl = e.target.imageUrl.value;
          const email = e.target.email.value;
          const password = e.target.password.value;
          // console.log(accept, name, email, password);
          if (!isStrongPassword(password)) {
               return alert('Password must contain at least one capital letter and one number.');
          } else {
               // createUserWithEmailAndPassword(auth, email, password)
               createUser(email,password)
                    .then((result) => {
                         setAlram('');
                         updateProfile(result.user, {
                              displayName: name,
                              photoURL: imageUrl,
                         }
                         
                         ).then(
                              Swal.fire({
                                   position: 'center',
                                   icon: 'success',
                                   title: 'Registration Successful!',
                                   showConfirmButton: false,
                                   timer: 1500
                                 })
                         )
                              .catch(error => console.error(error))

                              
                         })
                    .catch(() => {
                         setAlram('Already you have an account please try to login')
                    })
               nameRef.current.value = '';
               imageRef.current.value = '';
               emailRef.current.value = '';
               passwordRef.current.value = '';
          }



     }
     return (
          <div className="flex min-h-screen items-center mx-auto">
               <div className=" w-11/12 md:w-[500px] mx-auto">
                    <div>
                         <form onSubmit={handleSubmit}>
                              <input ref={nameRef} className="border p-2 w-full mb-4" type="text" name="name" placeholder="Name..." required />
                              <input ref={imageRef} className="border p-2 w-full mb-4" type="text" name="imageUrl" placeholder="Your Image url..." required />
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
                              <div className="mb-2">
                              </div>
                              <input className="border p-2 w-full bg-green-400" type="submit" value="Sign Up" />
                         </form>
                         <p>Have an account? Please <Link className="text-blue-800" to={'/login'}>Login</Link></p>
                    </div>
                    <div>
                         {
                              alram ? <p className="text-red-600">{alram}</p> : ''
                         }
                    </div>
               </div>
          </div>
     );
};

export default Registration;