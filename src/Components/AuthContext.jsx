import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import auth from './../../public/firebase.config';
import bgImage from "/src/images/background.jpg"
import logo from "/src/images/logo.png"

export const UserContext = createContext(null);
const AuthContext = ({ children }) => {
     const [loading, setLoading] = useState(true)
     const [upComingEvents, setUpComingEvents]= useState();
     const [serviceData, setServiceData]= useState();
     const [doctorsData, setDoctorsData]= useState();
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
     useEffect(() => {
          const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
               console.log(currentUser);
               setLoading(false)
               // console.log('from unSubscribe useEffect' , currentUser);
          });
          return () => {
               unSubscribe()
          }
     }, [])
     const userData = { loading, bgImage, logo, upComingEvents, serviceData, doctorsData }
     return (
          <UserContext.Provider value={userData}>

               {children}
          </UserContext.Provider>
     );
};

export default AuthContext;