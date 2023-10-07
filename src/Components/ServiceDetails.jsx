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



     const { image, serviceName, description, price } = findService
     return (
          <div className=" p-2 rounded-md flex flex-col max-w-7xl mx-auto">
               <img className="w-full h-[70vh]" src={image} alt="" />
               <h2 className="text-3xl font-bold mt-2">{serviceName}</h2>
               <h2 className="text-xl font-bold my-2">Price: {price}</h2>
               <p className="flex-grow">{description}</p>

          </div>
     );
};

export default ServiceDetails;