import { Link, useNavigate } from "react-router-dom";
import Quote from "../components/Quote";
import { ChangeEvent, useState, FormEvent } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { SignunInput } from "@shushant0810/medium-common";
import toast from "react-hot-toast";
import { Appbar } from "../components/Appbar";

const Signin = () => {
  const navigate = useNavigate();
  const [postInputs, setPostInputs] = useState<SignunInput>({
    name: "",
    username: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  async function sendRequest(e: FormEvent) {
    e.preventDefault();

    if (loading) return;

    setLoading(true);

    const toastId = toast.loading("Signing in...");

    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/signin`,
        postInputs
      );
      console.log(response.data);
      const { message, jwt, username } = response.data;

      toast.success(message, { id: toastId });

      localStorage.setItem("username", username);
      localStorage.setItem("token", jwt);
      navigate("/blogs");
    } catch (e) {
      toast.error("Invalid Credentials", { id: toastId });
    } finally {
      setLoading(false); // Reset loading state
    }
  }

  return (
    <div>
      <Appbar isAuthenticated={""}/>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div>
          <div className="h-screen flex justify-center flex-col">
            <div className="flex justify-center">
              <div>
                <div className="px-10">
                  <div className="text-3xl font-bold">Log in</div>
                  <div className="text-slate-500">
                    Don't have an account?
                    <Link
                      className="underline pl-2 hover:text-black"
                      to={"/signup"}
                    >
                      Sign up
                    </Link>
                  </div>
                </div>
                <div className="pt-8">
                  <form onSubmit={sendRequest}>
                    <LabelledInput
                      label="Email"
                      type={"email"}
                      required
                      placeholder="xyz@gmail.com"
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
                    <button
                      type="submit"
                      className="w-full mt-6 text-white bg-gray-900 hover:bg-black font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 hover:drop-shadow-lg dark:border-gray-700"
                      disabled={loading} // Disable button while loading
                    >
                      {loading ? "Signing In..." : "Sign In"}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block">
          <Quote />
        </div>
      </div>
    </div>
  );
};

interface LabelledInputType {
  label: string;
  required?: boolean;
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
}: LabelledInputType) {
  return (
    <div>
      <label className="block mb-2 text-sm font-semibold pt-4 text-black">
        {label}
      </label>
      <input
        type={type || "text"}
        onChange={onChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
}

export default Signin;
