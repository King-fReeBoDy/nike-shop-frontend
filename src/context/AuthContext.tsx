import { ReactElement, createContext, useState } from "react";

interface IAuth {
  user: IUser | null;
  setUser: (user: IUser | null) => void;
}

interface IUser {
  id: number;
  email: string;
  accessToken: string;
}

export const AuthAPI = createContext<IAuth>({
  user: null,
  setUser: () => {},
});

const AuthContext = ({ children }: { children: ReactElement }) => {
  const [user, setUser] = useState<IUser | null>(null);

  return (
    <AuthAPI.Provider value={{ user, setUser }}>{children}</AuthAPI.Provider>
  );
};

export default AuthContext;
