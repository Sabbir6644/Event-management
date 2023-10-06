

const ServiceCard = ({service}) => {
     const {image, serviceName, description} = service
     return (
          <div className=" p-2 border rounded-md flex flex-col">
               <img className="w-full h-64" src={image} alt="" />
               <h2 className="text-3xl font-bold my-2">{serviceName}</h2>
               <p className="flex-grow">{description}</p>
               <div className="flex justify-center items-end">
               <button className="py-2 px-3 rounded-md bg-green-400 text-white">Details</button>
               </div>
          </div>
     );
};

export default ServiceCard;