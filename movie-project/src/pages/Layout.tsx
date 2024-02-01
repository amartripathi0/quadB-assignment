import React, { createContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Create the context outside the component
export interface UserData {
  username: string;
  password: string;
}

export interface UserDataContextType {
    user: UserData | null;
    setUser: React.Dispatch<React.SetStateAction<UserData | null>>;
}

export const UserDataContext = createContext({});
 
// Initialize the state and create the context provider function
const UserDataContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const userContextValue = {
    user,
    setUser,
  };

  
  return (
    <UserDataContext.Provider value={userContextValue}>
      {children}
    </UserDataContext.Provider>
  );
};

const Layout = () => {
  return (
    <div>

      <ToastContainer />
      {/* Use the context provider component */}
      <UserDataContextProvider>
        <Outlet />
      </UserDataContextProvider>
    </div>
  );
};

export default Layout;
