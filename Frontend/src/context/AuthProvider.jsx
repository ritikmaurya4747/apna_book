import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const intialAuthUser = localStorage.getItem("Users");
  const [authUser, setAuthUser] = useState(
    intialAuthUser ? JSON.parse(intialAuthUser) : undefined
  );

  return (
    <AuthContext.Provider value={[ authUser, setAuthUser ]}>
      {children}
    </AuthContext.Provider>
  );
}

// Ye apna hook bana rahe hain taki user ko ham globally har jagah access kar sake
export const useAuth = () => useContext(AuthContext);