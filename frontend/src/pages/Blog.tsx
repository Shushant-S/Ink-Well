import { useParams } from "react-router-dom";
import { useBlog } from "../hooks";
import { FullBlog } from "../components/FullBlog";
import { Appbar } from "../components/Appbar";
import { Spinner } from "../components/Spinner";

const Blog = () => {

  const {id} = useParams();
  const { loading, blog } = useBlog({
    id: (id || "1")
  });
  const isAuthenticated = localStorage.getItem("token") || "";
 

  if(loading || !blog){
    return( 
      <div>
        <Appbar isAuthenticated={isAuthenticated}/>
        <div className="h-screen flex flex-col justify-center">
          <div className="flex justify-center">
            <Spinner/>
          </div>
        </div>
      </div>
  )}

  return (
    <div>
      <FullBlog blog={blog}/>
    </div>
  )
}


export default Blog;