
import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

const ServiceCard = ({service}) => {
     const {image, title, description, price, id} = service
     useEffect(() => {
          AOS.init({
            duration: 3000, 
            once: true, 
          });
        }, []);
     return (
          <div data-aos="flip-left" data-aos-delay="100" data-aos-anchor=".example-selector" className=" p-2 border rounded-md flex flex-col">
               <img className="w-full h-64" src={image} alt="" />
               <h2 className="text-3xl font-bold mt-2">{title}</h2>
               <h2 className="text-xl font-bold my-2">Registration fee: {price}</h2>
               <p className="flex-grow">{description}</p>
               <div className="flex  justify-center items-end">
               <Link to={`/details/${id}`}>
                    <button className="py-2 px-3 rounded-md bg-blue-500 text-white">Details</button>
                    </Link>
               </div>
          </div>
     );
};

export default ServiceCard;