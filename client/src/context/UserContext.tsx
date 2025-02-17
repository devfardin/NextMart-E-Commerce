import { getCurrentUser } from "@/services/AuthService";
import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import { IUser } from '@/types';

interface IUserProviderValues {
    user: IUser | null;
    isLoading: boolean;
    setUser: (user: IUser | null) => void;
    setIsLoading: Dispatch<SetStateAction<boolean>>;
}

const UserContent = createContext<IUserProviderValues | undefined>(undefined);


const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<IUser | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const handleUser = async () => {
        const user = await getCurrentUser();
        setUser(user);
        setIsLoading(false);
    }
    useEffect(() => {
        handleUser();
    }, [isLoading])

    return <UserContent.Provider value={{ user, setUser, isLoading, setIsLoading }}>{children}</UserContent.Provider>
}

export const useUser = () => {
    const context = useContext(UserContent);
    if (context == undefined) {
        throw new Error('useUser must be used within the User provider content')
    }
    return context;
}
export default UserProvider;