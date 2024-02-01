import React from "react";

const AuthComp = ({
  heading,
  handleChange,
  buttonLabel,
  handleButtonClick,
}: {
  heading: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  buttonLabel: string;
  handleButtonClick: () => void;
}) => {
  return (
    <div className="w-4/5">
      <h1>{heading}</h1>
      <div className="mb-6">
        <label
          htmlFor="username"
          className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
        >
          Username
        </label>
        <input
          type="text"
          onChange={handleChange}
          placeholder={"Please Enter your Username"}
          name="username"
          id="username"
          className="block w-full p-4 rounded-xl text-gray-900 border border-gray-300  bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="password"
          className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
        >
          Password
        </label>
        <input
          type="text"
          placeholder={"Please Enter your password"}
          onChange={handleChange}
          name="password"
          id="password"
          className="block w-full p-4 rounded-xl text-gray-900 border border-gray-300  bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>

      <button
        className=" relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
        type="submit"
        onClick= {handleButtonClick}
      >
        <span className="text-lg relative px-3 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          {buttonLabel}
        </span>
      </button>
    </div>
  );
};

export default AuthComp;
