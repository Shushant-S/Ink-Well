import axios from "axios";
import { Appbar } from "../components/Appbar";
import { BACKEND_URL } from "../config";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export const Publish = () => {


  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("token") || "";

  async function handlePostBlog() {
    if (loading) return; // Prevent multiple submissions

    if (!title || !description) {
      toast.error("Title and description are required.");
      return;
    }

    setLoading(true); // Set loading to true

    const toastId = toast.loading("Posting blog..."); // Show loading toast
    const imageUrlToSubmit = imageUrl || "https://i.pinimg.com/originals/3c/63/10/3c63100127d896f366c1933622e65e97.png"

    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/blog`,
        {
          title,
          content: description,
          imageUrl: imageUrlToSubmit
        },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      toast.success("Blog posted successfully!", { id: toastId });
      navigate(`/blog/${response.data.id}`);
    } catch (error) {
      toast.error("Something went wrong while posting the blog!", {
        id: toastId,
      });
    } finally {
      setLoading(false); // Reset loading state
    }
  }

  return (
    <div>
      <Appbar isAuthenticated={isAuthenticated} />
      <div className="flex justify-center pt-8">
        <div className="max-w-screen-lg w-full">
          <textarea
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            className="block p-2.5 w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 outline-none"
            placeholder="Write your title..."
          ></textarea>

          <TextEditor
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />

          <textarea
            onChange={(e) => {
              setImageUrl(e.target.value);
            }}
            className="block p-3 w-full text-md text-yellow-900 bg-yellow-50 rounded-lg border border-yellow-300 outline-none"
            placeholder="Paste your image link here"
          ></textarea>

          <div className="flex justify-center p-4">
            <button
              onClick={handlePostBlog}
              type="button"
              className="mt-6 justify-center flex text-white bg-gray-900 hover:bg-black drop-shadow-md hover:drop-shadow-xl transition-all ease-in-out focus:outline-none font-medium rounded-lg text-sm px-16 py-2.5 me-2 mb-2"
              disabled={loading}
            >
              {loading ? "Posting..." : "Post Blog"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

function TextEditor({
  onChange,
}: {
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}) {
  return (
    <div>
      <div className="w-full mb-4 border border-gray-300 rounded-lg bg-gray-50 mt-5">
        <div className="bg-white rounded-t-lg">
          <textarea
            rows={4}
            onChange={onChange}
            className="w-full text-md h-56 text-gray-900 bg-white p-3 outline-none rounded-lg"
            placeholder="Write your thoughts here..."
            required
          ></textarea>
        </div>
      </div>
    </div>
  );
}
