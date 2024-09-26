import React from 'react';
import { Link } from 'react-router-dom';
import displayImg from '../../assets/img/image.jpg';

const Reset = () => {
  return (
    <>
      <section>
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl  rounded-2xl md:flex-row md:space-y-0">
            {/* Left side */}
            <div className="flex flex-col justify-center mt-2 p-8 md:p-14">
              <span className="mb-3 text-4xl font-bold">Reset Password</span>
              <span className="font-light text-gray-400 mb-4">
                Welcome back! Please enter your details
              </span>
              <form>
                <div className="py-4">
                  <label htmlFor="email" className="mb-2 text-md block">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full p-2 border border-gray-300 rounded-md mb-2 placeholder:font-light placeholder:text-gray-500"
                    name="email"
                    id="email"
                    required
                    placeholder="Enter your email"
                  />
                </div>
                
                
                <button className="w-full bg-black text-white p-2 rounded-lg mb-2 hover:bg-accent hover:text-white hover:border hover:border-gray-300">
                  Reset Password
                </button>

                <div className="flex justify-between w-full py-4">
                  <div className="mr-24">
                  <Link to="/login">
                  <span className="font-bold text-accent text-md"> Login</span>
                  </Link>
                  </div>
                  <Link to="/register">
                  <span className="font-bold text-accent text-md"> Register</span>
                  </Link>
                </div>
                
              </form>
            </div>
            {/* Right side */}
            {/* <div className="relative">
              <img
                src={displayImg}
                alt="Display"
                className="w-[400px] h-full hidden rounded-r-2xl md:block object-cover"
              /> */}
              {/* Text on image */}
              {/* <div className="absolute hidden bottom-10 right-6 p-6 bg-black bg-opacity-30 backdrop-blur-sm rounded drop-shadow-lg md:block">
                <span className="text-white text-xl">
                  Welcome to Mzansi Stays! Discover your perfect stay effortlessly and enjoy exclusive deals!
                </span>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Reset;