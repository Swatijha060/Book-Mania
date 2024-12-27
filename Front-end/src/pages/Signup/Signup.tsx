import React from "react";
import { useForm } from "react-hook-form";

interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUp: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>();

  const onSubmit = handleSubmit(({ name, email, password }) => {
    console.log("User Registered:", { name, email, password });
    // Add logic for handling registration (API call, etc.)
  });

  const password = watch("password");

  return (
    <div>
      {/* Logo at the top */}
      <div className="absolute top-4 left-4">
        <img src="/BookMania-Logo.png" alt="Logo" className="mx-auto h-32" />
      </div>

      {/* Sign Up Box */}
      <div className="max-w-md w-full bg-white p-8 border border-gray-300 rounded shadow-lg">
        <div className="text-left font-medium text-xl mb-6">Sign Up</div>

        <form className="space-y-6" onSubmit={onSubmit}>
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="text-sm font-bold text-gray-600">
              Full Name
            </label>
            <input
              {...register("name", { required: "Name is required" })}
              name="name"
              type="text"
              placeholder="Enter your full name"
              className={`w-full p-2 border rounded mt-1 ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          {/* Email Field */}
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
                  message: "Email must not exceed 30 characters",
                },
              })}
              name="email"
              type="email"
              placeholder="Enter your email address"
              className={`w-full p-2 border rounded mt-1 ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="text-sm font-bold text-gray-600"
            >
              Password
            </label>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              name="password"
              type="password"
              placeholder="Enter a password"
              className={`w-full p-2 border rounded mt-1 ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-black hover:bg-gray-500 rounded-md text-white text-sm"
          >
            Sign Up
          </button>
        </form>

        {/* Already Have an Account Option */}
        <div className="mt-4 text-center">
          <p className="text-gray-600 text-sm">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-blue-500 font-medium hover:underline"
            >
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
