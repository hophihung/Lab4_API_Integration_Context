import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Xử lý đăng ký (ví dụ: gọi API)
    // navigate('/some-path');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
        Get more opportunities
      </h1>

      <Button className="w-full max-w-sm flex items-center justify-center gap-2 border border-gray-300 rounded-md py-6 px-4 text-sm font-medium text-gray-700 hover:bg-gray-100 transition">
        <span className="text-blue-600 text-lg">+</span> Sign Up with Google
      </Button>

      <div className="flex items-center my-6 w-full max-w-sm">
        <hr className="flex-1 border-gray-300" />
        <span className="mx-4 text-sm text-gray-500">Or sign up with email</span>
        <hr className="flex-1 border-gray-300" />
      </div>

      <form className="flex flex-col w-full max-w-sm space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <label className="text-sm font-medium text-gray-700">Full name</label>
        <input
          type="text"
          placeholder="Enter your full name"
          className={`p-3 border ${errors.fullName ? 'border-red-500' : 'border-gray-300'} py-4 rounded-md text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none`}
          {...register('fullName', { required: 'Full name is required.' })}
        />
        {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>}

        <label className="text-sm font-medium text-gray-700">Email Address</label>
        <input
          type="email"
          placeholder="Enter email address"
          className={`p-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} py-4 rounded-md text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none`}
          {...register('email', {
            required: 'Email is required.',
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'Entered value does not match email format.',
            },
          })}
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}

        <label className="text-sm font-medium text-gray-700">Password</label>
        <input
          type="password"
          placeholder="Enter password"
          className={`p-3 border ${errors.password ? 'border-red-500' : 'border-gray-300'} py-4 rounded-md text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none`}
          {...register('password', {
            required: 'Password is required.',
            minLength: {
              value: 6,
              message: 'Password must have at least 6 characters.',
            },
          })}
        />
        {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}

        <Button
          className="w-full bg-indigo-600 text-white py-6 rounded-md text-sm font-medium hover:bg-indigo-700 transition"
          variant="outline"
          type="submit"
        >
          Continue
        </Button>
      </form>

      <p className="mt-4 text-sm text-gray-600">
        Already have an account?{' '}
        <Link to="/"  className="text-indigo-600 font-medium hover:underline">
          Login
        </Link>


        
        
      </p>


     

      <p className="mt-2 text-xs text-gray-500 text-center max-w-sm">
      By clicking 'Continue', you acknowledge that you have read and accept the{' '}
      <span
        onClick={() => navigate('/terms-of-service')}
        className="underline text-indigo-600 cursor-pointer"
      >
        Terms of Service
      </span>{' '}
      and{' '}
      <span
        onClick={() => navigate('/privacy-policy')}
        className="underline text-indigo-600 cursor-pointer"
      >
        Privacy Policy
      </span>.
    </p>
    </div>
  );
};

export default Signup;
