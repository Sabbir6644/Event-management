

const ServiceCard = ({service}) => {
     const {image, serviceName, description, price} = service
     return (
          <div className=" p-2 border rounded-md flex flex-col">
               <img className="w-full h-64" src={image} alt="" />
               <h2 className="text-3xl font-bold mt-2">{serviceName}</h2>
               <h2 className="text-xl font-bold my-2">Price: {price}</h2>
               <p className="flex-grow">{description}</p>
               <div className="flex justify-center items-end">
               <button className="py-2 px-3 w-full rounded-md bg-blue-400 text-white">Details</button>
               </div>
          </div>
     );
};

export default ServiceCard;