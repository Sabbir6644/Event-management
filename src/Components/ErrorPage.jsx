import { Link } from "react-router-dom";


const ErrorPage = () => {

     return (
          <div>
               <div className="min-h-screen flex flex-col justify-center items-center">
                    <h2 className="text-6xl text-center font-bold">Data not found</h2>
                    <Link to={'/'}><button className="py-2 px-3 bg-blue-400 rounded-md">Go Home</button></Link>
               </div>
          </div>
     );
};

export default ErrorPage;