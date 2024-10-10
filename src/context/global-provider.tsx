import { getCurrentUser } from '@/lib/appwrite/users/current.user';
import { createContext, useContext, useState, useEffect, Dispatch, SetStateAction } from 'react';
import { Models } from 'react-native-appwrite';

interface UserDoc extends Models.Document {}

type GlobalContextType = {
  isLoggedIn: boolean;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
  user: UserDoc | null;
  setUser: Dispatch<SetStateAction<UserDoc | null>>;
  isLoading: boolean;
};

type GlobalContextProviderProps = {
  children: React.ReactNode;
};

const GlobalContext = createContext<GlobalContextType | null>(null);
export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = ({ children }: GlobalContextProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<UserDoc | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    sessionChecker;
  }, []);

  const sessionChecker = async () => {
    try {
      const res = await getCurrentUser();
      if (res) {
        setIsLoggedIn(true);
        setUser(res);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return <GlobalContext.Provider value={{ isLoggedIn, setIsLoggedIn, user, setUser, isLoading }}>{children}</GlobalContext.Provider>;
};

export default GlobalProvider;
