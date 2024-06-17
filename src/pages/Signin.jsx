import { useSignup } from "../hooks/useSignup";
import { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link,Form,useActionData } from "react-router-dom";

import FormInput from "../components/FormInput";
import useLogin from "../hooks/useLogin";

export const action = async ({ request }) => {
  let formData = await request.formData();
  let email = formData.get("Email");
  let password = formData.get("Password");

  return {email,password};
};

function Signin() {
  const userSignin =useActionData()
  const {signInEmailAndPassword}=useLogin()

  useEffect(()=>{
    if(userSignin){
    signInEmailAndPassword(userSignin.email,userSignin.password)
    }
  },[userSignin])


  const { signupWithGoogle, user, error } = useSignup();
  return (
    <div className="min-h-screen grid place-items-center">
       <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="/freecompress-cooking-pastas-healthy-eating-food-food-pasta-pasta-9821-full.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="max-w-96 w-full card  p-8 shadow-lg rounded-lg flex flex-col gap-y-4 bg-gray-100/50 backdrop-blur-md relative z-10">
      <h4 className="text-center font-bold text-3xl text-gray-800">
          Login
        </h4>
       <Form method="post">
       <FormInput type="email" label="Email:" name="Email" />
        <FormInput type="password" label="Password:" name="Password" />
        <div>
          <button className="btn btn-secondary w-full mb-3" type="sumbit">
            Sumbit
          </button>
          <button
            type="button"
            onClick={signupWithGoogle}
            className="btn btn-secondary w-full mb-5"
          >
            <FcGoogle className="text-3xl" />
            <span className="text-xl">Google</span>
          </button>
          <p className="text-center">
            If you don't have account
            <Link className="link text-cyan-400" to="/signup">
              Signup
            </Link>
          </p>
        </div>
       </Form>
      </div>
    </div>
  );
}

export default Signin;
