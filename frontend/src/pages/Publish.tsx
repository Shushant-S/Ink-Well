import axios from "axios";
import { Appbar } from "../components/Appbar";
import { BACKEND_URL } from "../config";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Publish = () => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

  return (
    <div>
      <Appbar />
      <div className="flex justify-center pt-8 ">
        <div className="max-w-screen-lg w-full">
          <textarea
            onChange={(e) => {
                setTitle(e.target.value)
            }}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 outline-none"
            placeholder="Write your title..."
          ></textarea>

          <TextEditor onChange={(e) => {
            setDescription(e.target.value)
          }}/>

          <div className="flex justify-center p-4">
            <button
              onClick={async () => {
                const response = await axios.post(`${BACKEND_URL}/api/v1/blog`, {
                    title,
                    content: description
                }, {
                    headers: {
                        Authorization: localStorage.getItem("token")
                    }
                });
                navigate(`/blog/${response.data.id}`)
              }}
              type="submit"
              className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-slate-900 rounded-lg hover:bg-black"
            >
              Post comment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

function TextEditor( { onChange } : {onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void}) {
  return (
    <div>
      <div className="w-full mb-4 border border-gray-300 rounded-lg bg-gray-50 mt-5">
        <div className=" bg-white rounded-t-lg ">
          <textarea
            rows={4}
            onChange={onChange}
            className="w-full text-sm text-gray-900 bg-white p-3 outline-none rounded-lg"
            placeholder="Write your thoughts here..."
            required
          ></textarea>
        </div>
      </div>
    </div>
  );
}
