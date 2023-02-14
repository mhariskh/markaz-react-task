import { mediaPaths } from "../../../src/constants";
import { LoginForm } from "../../components";

export const Login = () => {
  return (
    <section className="h-full overflow-y-auto shadow-2xl">
      <div className="container h-full px-6 py-12">
        <div className="flex h-full flex-wrap items-center justify-center  gap-5 text-gray-800 lg:flex-row-reverse">
          <div className="mb-12 md:w-8/12 lg:mb-0 lg:w-6/12">
            <img src={mediaPaths.login} className="w-full h-20" alt="" />
          </div>
          <div className="md:w-8/12 lg:ml-20 lg:w-5/12 shadow-xl p-5 border rounded-md">
            <h1 className="text-4xl font-semibold">Log In</h1>
            <p className="my-5 text-lg font-normal text-gray-500">
              Enter your email and password to login
            </p>
            <LoginForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
