import { SignunInput } from "@shushant0810/medium-common";
import axios from "axios";
import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config";



export const Auth = ({ type }: { type: "signup" | "signin" }) => {

    const Navigate = useNavigate();

  const [postInputs, setPostInputs] = useState<SignunInput>({
    name: "",
    username: "",
    password: "",
  });

  async function sendRequest(){
    try{
        const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`, postInputs);
        const jwt = response.data.jwt;
        localStorage.setItem("token", jwt);
        Navigate('/blogs ');

    }catch(e){
        alert("somthing went wrong with signing in")
    }
  }


  return (
    <div className="h-screen flex  justify-center flex-col">
      <div className="flex justify-center">
        <div>
          <div className="px-10">
            <div className="text-3xl font-bold">Create an account</div>
            <div className="text-slate-500">
              Already have an account?
              <Link className="underline pl-2 hover:text-black " to={type === "signin" ? "/signup" : "/signin"}>
                {type === "signin" ? "Sign up" : "Sign in"}
              </Link>
            </div>
          </div>
          <div className="pt-8">
            {type === "signup" ? <LabelledInput
              label="Name"
              required
              placeholder="Enter your name"
              onChange={(e) => {
                setPostInputs((c) => ({
                  ...c,
                  name: e.target.value,
                }));
              }}
            /> : null}
            <LabelledInput
              label="username"
              type={"email"}
              required
              placeholder="xyz@gmai.com"
              onChange={(e) => {
                setPostInputs((c) => ({
                  ...c,
                  username: e.target.value,
                }));
              }}
            />
            <LabelledInput
              label="Password"
              type={"password"}
              placeholder="*****"
              required
              onChange={(e) => {
                setPostInputs((c) => ({
                  ...c,
                  password: e.target.value,
                }));
              }}
            />
            <button onClick={sendRequest} type="button" className="w-full mt-6 text-white bg-gray-900 hover:bg-black focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{ type === "signup" ? "Sign Up" : "Sign In"}</button>

          </div>
        </div>
      </div>
    </div>
  );
};

interface labelledInputType {
  label: string;
  required?: boolean,
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

function LabelledInput({
  label,
  placeholder,
  required,
  type,
  onChange,
}: labelledInputType) {


  return (
    <div>
      <div>
        <label className="block mb-2 text-sm font-semibold pt-4 text-black">
          {label}
        </label>
        <input
          type={type || "text"}
          id="first_name"
          onChange={onChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder={placeholder}
          required={required}
        />
      </div>
    </div>
  );
}
