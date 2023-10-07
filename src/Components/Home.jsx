import { useContext } from "react";
import { UserContext } from "./AuthContext";
import Service from "./service";
import UpcomingEvents from "./UpcomingEvents";
import Partner from "./Partner";



const Home = () => {
     const { bgImage } = useContext(UserContext)
     const backgroundStyle = {
          backgroundImage: `url(${bgImage})`,        
          backgroundPosition: "cover",
        };
        
     return (
          <div className="max-w-7xl mx-auto">
               <div className="flex items-center pl-10 md:min-h-screen" style={backgroundStyle}>
               <div>
               <h2 className="text-orange-300 text-5xl font-bold text-center mb-3">Your Health, Your Future <br />
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