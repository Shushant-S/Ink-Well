import { useNavigate } from "react-router-dom";
import { Appbar } from "../components/Appbar";
import Landing1 from "../assets/Landing1.png";
import Landing2 from "../assets/Landing2.png";
import Landing3 from "../assets/Landing3.png";
import { Footer } from "../components/Footer";




export const LandingPage = () => {
  const isAuthenticated = localStorage.getItem("token") || "";
  const navigate = useNavigate();

  return (
    <div>
      <Appbar isAuthenticated={isAuthenticated} />

      {/* landing page 1 */}
      <div className="md:m-4 h-auto md:h-scresen flex flex-col md:flex-row justify-between p-4">
        <div className="md:w-2/4">
          <div className="mt-16 font-cabin">
            <p className="text-3xl md:text-7xl font-semibold text-black">
              Human <br />
              stories & ideas.
            </p>
            <p className="leading-loose text-gray-800 mt-5">
              A platform where you can write, plan, and collaborate to deepen
              your understanding. A place to read, share, and bring your ideas
              to life.
            </p>
            <div className="flex justify-center">
              <button 
              onClick={() => navigate("/blogs")}
              className="mt-6 w-56 justify-center flex text-white bg-black hover:drop-shadow-xl transition-all ease-in-out focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">
                Explore Blogs
              </button>
            </div>
          </div>
        </div>
        <div className="md:ml-4 mt-16">
          <img src={Landing1} alt="" className="w-[640px]" />
        </div>
      </div>

      {/* border */}
      <div className="border bg-black m-6 md:m-12"></div>

      {/* landing page 2 */}
      <div className="">
        <div className="m-1 md:m-4 h-auto md:h-scresen flex flex-col md:flex-row justify-between p-4 bg-[#F7F34ED]">
          <div className="md:ml-4 ">
            <img
              src={Landing2}
              alt=""
              className="w-[460px] aspect-[460/600] h-[500px] "
            />
          </div>
          <div className="md:w-1/2">
            <div className="mt-12 font-cabin">
              <p className="text-3xl md:text-7xl font-semibold text-black">
                Deepen <br />
                understanding <br />
                through the power <br />
                of writing.
              </p>
              <p className="leading-loose text-gray-800 mt-5">
                A platform where you can write, plan, and collaborate to deepen
                your understanding. A place to read, share, and bring your ideas
                to life.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* border */}
      <div className="border bg-black m-6 md:m-12"></div>

      {/* landing page 3 */}
      <div className="">
        <div className="m-1 md:m-4 h-auto md:h-scresen flex flex-col md:flex-row justify-between p-4 bg-[#F7F34ED]">
          <div className="md:w-1/2">
            <div className="mt-12 font-cabin">
              <p className="text-3xl md:text-7xl font-semibold text-black">
                Join a Thriving <br />
                Community.
              </p>
              <p className="leading-loose text-gray-800 mt-5">
                Connect with like-minded individuals, engage in thoughtful
                discussions, and collaborate on projects. Our platform offers
                tools and features designed to help you grow and succeed
                together.
              </p>
            </div>
            <div className="flex justify-center">
              {!isAuthenticated ? <button 
              onClick={() => {navigate('/signup')}}
              className="mt-6  w-56 justify-center flex text-white bg-black hover:drop-shadow-xl transition-all ease-in-out focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">
                Join Now
              </button> : <div></div>}
            </div>
          </div>
          <div className="md:ml-4 ">
            <img src={Landing3} alt="" className="w-[600px] h-[500px] " />
          </div>
        </div>
      </div>


      <div className="border bg-gray-50 m-6 md:m-16"></div>


      {/* Footer */}
      <div className="">
        <Footer/>
      </div>


    </div>
  );
};
