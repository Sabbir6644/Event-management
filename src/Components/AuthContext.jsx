import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from './../../public/firebase.config';
import bgImage from "/src/images/background.jpg"
import bg from "/src/images/bg.jpg"
import logo from "/src/images/logo.png"
import imgUNFPA from "/src/images/unfpa.png"
import imgUnicef from "/src/images/unicef.png"
import imgWHO from "/src/images/who.png"
import imgFRIENDSHIP from "/src/images/friendship.png"

export const UserContext = createContext(null);
const AuthContext = ({ children }) => {
     const [loading, setLoading] = useState(true)
     const [upComingEvents, setUpComingEvents]= useState();
     const [serviceData, setServiceData]= useState();
     const [doctorsData, setDoctorsData]= useState();
     const [ user, setUser]= useState(null);
     useEffect(()=>{
          fetch('/upComingEvents.json')
          .then(res=> res.json())
          .then(data => setUpComingEvents(data))
     },[])
     useEffect(()=>{
          fetch('/service.json')
          .then(res=> res.json())
          .then(data => setServiceData(data))
     },[])
     useEffect(()=>{
          fetch('/doctor.json')
          .then(res=> res.json())
          .then(data => setDoctorsData(data))
     },[])
     const createUser = (email,password)=>{
          setLoading(true)
          return createUserWithEmailAndPassword(auth,email,password)
      }
      const userLogin = (email,password)=>{
          setLoading(true)
           return signInWithEmailAndPassword(auth,email,password)
       }
       const googleProvider = new GoogleAuthProvider()
       const loginWithGoogle = ()=>{
          setLoading(true)
          return signInWithPopup(auth, googleProvider)
       }
       const logout = ()=>{
          setLoading(true)
           return signOut(auth)
          
       }

     useEffect(() => {
          const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
               setUser(currentUser);
               setLoading(false)
          });
          return () => {
               unSubscribe()
          }
     }, [])
     const userData = {user, logout, userLogin,
           loading, bgImage, logo,
            upComingEvents, serviceData,
             doctorsData, createUser, loginWithGoogle,
          imgFRIENDSHIP, imgUNFPA, imgUnicef, imgWHO, bg }
     return (
          <UserContext.Provider value={userData}>

               {children}
          </UserContext.Provider>
     );
};

export default AuthContext;