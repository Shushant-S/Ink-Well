import { useNavigate } from "react-router-dom";

const ErrorPage = ({errormessage}: {errormessage: string}) => {

  const navigate = useNavigate();

  return (
    <div>
      <main className="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
        <h1 className="text-9xl font-extrabold text-white tracking-widest">404</h1>
        <div className="bg-[#FF6A3D] px-3 text-md font-medium rounded rotate-12 absolute">
          {errormessage}
        </div>
        <button className="mt-5">
          <a href="/" className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring">
            <span className="absolute inset-0 transition-transform translate-x-1 translate-y-1 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"></span>

            <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
              <button 
                onClick={() => {
                  navigate('/')
                }}
              >Go Home</button>
            </span>
          </a>
        </button>
      </main>
    </div>
  );
};

export default ErrorPage;