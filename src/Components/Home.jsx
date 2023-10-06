import { useContext } from "react";
import Nav from "./Nav";
import { UserContext } from "./AuthContext";
import Service from "./service";
import UpcomingEvents from "./UpcomingEvents";


const Home = () => {
     const { bgImage } = useContext(UserContext)
     const backgroundStyle = {
          backgroundImage: `url(${bgImage})`,
          minHeight: "80vh",
          Width: "100vw",
          backgroundPosition: "cover",
        };
        
     return (
          <div>
               <Nav></Nav>
               <div className="flex items-center pl-10" style={backgroundStyle}>
               <div>
               <h2 className="text-orange-300 text-5xl font-bold text-center mb-3">Your Health, Your Future <br />
                Ignite Wellness, <br />
                Transform Your Life</h2>
                <p className=" text-center text-lg font-medium">Embark on a transformative journey to ignite wellness <br />
                 and shape a brighter future for yourself. Your health is your future.</p>
               </div>
               </div>

<Service></Service>

<UpcomingEvents></UpcomingEvents>
          </div>
     );
};

export default Home;