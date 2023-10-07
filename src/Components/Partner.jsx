import { useContext } from "react";
import { UserContext } from "./AuthContext";


const Partner = () => {
     const {imgFRIENDSHIP, imgUNFPA, imgUnicef, imgWHO} = useContext(UserContext);
     return (
          <div className="my-5">
               <h2 className="text-5xl font-bold text-center mb-6">Event Partners and Supporters</h2>
              
               <div className="flex flex-col justify-center items-center md:justify-evenly md:flex-row shadow-md py-3">
                    <img className="h-28 w-36 mx-auto md:mx-0" src={imgWHO} alt="" />
                    <img className="h-28 w-36 my-5 mx-auto md:mx-0" src={imgUnicef} alt="" />
                    <img className="h-28 w-48 mx-auto md:mx-0" src={imgFRIENDSHIP} alt="" />
                    <img className="h-28 w-44 mt-5 mx-auto md:mx-0" src={imgUNFPA} alt="" />

               </div>
          </div>
     );
};

export default Partner;