import React, { createContext, useState, ReactNode } from 'react';
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

// Use the correct name for the provider
export const UserDataContext = createContext<UserDataContextType | undefined>(undefined);

// Use the correct name for the provider
export const UserDataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserData | null>(null);

  return (
    <UserDataContext.Provider value={{ user, setUser }}>
      {children}
    </UserDataContext.Provider>
  );
};

const Layout = () => {
  return (
    <div>
      <ToastContainer />
      {/* Use the correct name for the provider */}
      <UserDataProvider>
        <Outlet />
      </UserDataProvider>
    </div>
  );
};

export default Layout;
