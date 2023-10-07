import { useContext, useEffect } from "react";
import { UserContext } from "./AuthContext";
import Service from "./service";
import UpcomingEvents from "./UpcomingEvents";
import Partner from "./Partner";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Home = () => {
     const { bg } = useContext(UserContext)
     const backgroundStyle = {
          backgroundImage: `url(${bg})`,        
          backgroundPosition: "cover",
        };
        useEffect(() => {
          AOS.init({
            duration: 3000, 
            once: true, 
          });
        }, []);
        
     return (
          <div className="max-w-7xl mx-auto">
               <div className="flex items-center justify-center pl-10 lg:min-h-[70vh]" style={backgroundStyle}>
               <div data-aos="flip-left" data-aos-delay="100" data-aos-anchor=".example-selector">
               <h2 className="text-purple-700 text-5xl font-bold text-center mb-3">Your Health, Your Future <br />
                Ignite Wellness, <br />
                Transform Your Life</h2>
                <p className=" text-center text-lg font-medium">Embark on a transformative journey to ignite wellness <br />
                 and shape a brighter future for yourself. Your health is your future.</p>
               </div>
               </div>
<Service></Service>
<Partner></Partner>
<UpcomingEvents></UpcomingEvents>


          </div>
     );
};

export default Home;