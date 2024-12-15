import { useForm } from "react-hook-form";

interface FormData {
  email: string;
  password: string;
  remember: boolean;
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = handleSubmit(({ email, password, remember }) => {
    console.log(email, password, remember);
  });

  return (
    <div>
      {/* Logo at the top */}
      <div className=" absolute top-4 left-4">
        <img src="/BookMania-Logo.png" alt="Logo" className="mx-auto h-32 " />
      </div>
      {/* Login Box */}
      <div className="max-w-md w-full bg-white p-8 border border-gray-300 rounded shadow-lg">
        <div className="text-left font-medium text-xl mb-6">Login</div>

        <form className="space-y-6" onSubmit={onSubmit}>
          <div>
            <label htmlFor="email" className="text-sm font-bold text-gray-600">
              Email Address
            </label>
            <input
              {...register("email", {
                required: "Email is required",
                minLength: {
                  value: 6,
                  message: "Email must be at least 6 characters",
                },
                maxLength: {
                  value: 30,
                  message: "Email must not exceed 20 characters",
                },
              })}
              name="email"
              type="text"
              className={`w-full p-2 border rounded mt-1 ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="password"
              className="text-sm font-bold text-gray-600"
            >
              Password
            </label>
            <input
              {...register("password", { required: "Password is required" })}
              name="password"
              type="password"
              className={`w-full p-2 border rounded mt-1 ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                {...register("remember", { required: "You must agree" })}
                name="remember"
                type="checkbox"
                className="h-4 w-4 text-blue-300 rounded"
              />
              <label htmlFor="" className="ml-2 text-sm text-gray-600">
                Remember me
              </label>
            </div>
            <a href="" className="font-medium text-sm text-blue-500">
              Forget Password
            </a>
          </div>
          {errors.remember && (
            <p className="text-red-500 text-sm">{errors.remember.message}</p>
          )}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-black hover:bg-gray-400 rounded-md text-white text-sm"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
