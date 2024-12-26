import React, { createContext, useContext, useState } from "react";

// Role Context
type RoleContextType = {
  role: string;
  setRole: (role: string) => void;
};

const RoleContext = createContext<RoleContextType>({
  role: "user",
  setRole: () => {},
});

export const RoleProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [role, setRole] = useState<string>("user");
  return (
    <RoleContext.Provider value={{ role, setRole }}>
      {children}
    </RoleContext.Provider>
  );
};

export const useRole = () => useContext(RoleContext);
