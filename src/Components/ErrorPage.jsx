import Nav from "./Nav";


const ErrorPage = () => {
     return (
          <div>
              <Nav></Nav>
              <div className="min-h-screen flex justify-center items-center">
               <h2 className="text-6xl text-center font-bold">Data not found</h2>
              </div>
          </div>
     );
};

export default ErrorPage;