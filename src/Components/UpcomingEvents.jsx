import { useContext } from "react";
import { UserContext } from "./AuthContext";
import UpComingEventCards from "./UpComingEventCards";


const UpcomingEvents = () => {
     const {upComingEvents} = useContext(UserContext)
   
     return (
          <div>
              <h2 className="text-5xl font-bold text-center mb-5">Upcoming Events</h2> 
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                         upComingEvents?.map(event => <UpComingEventCards key={event.id} event={event}></UpComingEventCards> )
                    }
               </div>
          
          </div>
     );
};

export default UpcomingEvents;