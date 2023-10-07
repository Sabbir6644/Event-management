
import { Link } from "react-router-dom";


const ServiceCard = ({service}) => {
     const {image, serviceName, description, price, id} = service
     return (
          <div className=" p-2 border rounded-md flex flex-col">
               <img className="w-full h-64" src={image} alt="" />
               <h2 className="text-3xl font-bold mt-2">{serviceName}</h2>
               <h2 className="text-xl font-bold my-2">Price: {price}</h2>
               <p className="flex-grow">{description}</p>
               <div className="flex  justify-center items-end">
               <Link to={`/details/${id}`}>
                    <button className="py-2 px-3 rounded-md bg-blue-400 text-white">Details</button>
                    </Link>
               </div>
          </div>
     );
};

export default ServiceCard;