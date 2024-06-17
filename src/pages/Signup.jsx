import { useSignup } from "../hooks/useSignup";
import { FcGoogle } from "react-icons/fc";
import { Link, Form, useActionData } from "react-router-dom";
import FormInput from "../components/FormInput";
import { useEffect } from "react";

export const action = async ({ request }) => {
  let formData = await request.formData();
  let name = formData.get("Name");
  let photo = formData.get("Photo");
  let email = formData.get("Email");
  let password = formData.get("Password");

  return {name,photo,email,password};
};

function Signup() {
  const userSignup =useActionData()
  const {signupWithGoogle,signupWithPasswordAndEmail, user, error } = useSignup();
  useEffect(()=>{
    if(userSignup){
    signupWithPasswordAndEmail(userSignup.name,userSignup.photo,userSignup.email,userSignup.password)
    }
  },[userSignup])
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
          Register
        </h4>
        <Form method="post">
          <FormInput type="text" label="Name:" name="Name" />
          <FormInput type="url" label="Photo Url:" name="Photo" />
          <FormInput type="email" label="Email:" name="Email" />
          <FormInput type="password" label="Password:" name="Password" />
          <div>
            <button className="btn btn-secondary w-full mb-3" type="submit">
              Submit
            </button>
            <button
              type="button"
              onClick={signupWithGoogle}
              className="btn btn-secondary w-full mb-5"
            >
              <FcGoogle className="text-3xl" />
              <span className="text-2xl">Google</span>
            </button>
            <p className="text-center">
              Are you alreadey registerad ?{" "}
              <Link className="link text-cyan-400" to="/signin">
                Login
              </Link>{" "}
            </p>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Signup;
