import { useContext } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "./AuthContext";


const ServiceDetails = () => {
     const params = useParams();
     const { serviceData, loading } = useContext(UserContext)
     const { id } = params
     if (loading) {
          return
     }
     const findService = serviceData?.find(service => service.id == id);


     console.log(findService);
     const { image, title, description, eventHighlights, schedule, targetAudience, whyAttend } = findService
     return (
          <div className=" p-2 rounded-md flex flex-col max-w-7xl mx-auto">
               <img className="w-full h-[70vh]" src={image} alt="" />
               <h2 className="text-3xl font-bold my-2">{title}</h2>
               <p className="text-lg font-semibold"><span className="text-lg font-medium">Schedule:</span> {schedule?.time}</p>
               <p className="text-lg font-medium my-2"><span className="text-lg font-medium">Location:</span> {schedule?.location}</p>
               <p className="flex-grow"><span className="text-lg font-medium">Description:</span> {description}</p>
               <p className="my-2"><span className="text-lg font-medium">Event hilight:</span> {eventHighlights}</p>
               <h2 className=" my-2"><span className="text-lg font-medium">Targated Audience :</span> {targetAudience}</h2>
               <p className="my-2"> <span className="text-lg font-medium">Why Attend:</span> {whyAttend}</p>


          </div>
     );
};

export default ServiceDetails;