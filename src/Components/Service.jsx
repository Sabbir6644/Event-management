import { useContext } from "react";
import { UserContext } from "./AuthContext";
import ServiceCard from "./ServiceCard";


const Service = () => {
     const { serviceData } = useContext(UserContext)
     return (
          <div className="my-5">
               <h2 className="text-5xl font-bold text-center mb-5">Our Services</h2>
               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                         serviceData?.map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)
                    }
               </div>
          </div>
     );
};

export default Service;