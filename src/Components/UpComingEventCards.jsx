

const UpComingEventCards = ({event}) => {
     const {title, image, description} = event
     return (
          <div className=" p-2 border rounded-md flex flex-col">
               <img className="w-full h-64" src={image} alt="" />
               <h2 className="text-3xl font-bold my-2">{title}</h2>
               <p className="flex-grow">{description}</p>
          
          </div>
     );
};

export default UpComingEventCards;