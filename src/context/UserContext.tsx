import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

interface User {
    username: string;
    profile: { profilePicture: string; };

}
interface UserContextType {
    user: User | null;
    setUser: (u: User | null) => void;
    fetchUser: () => Promise<void>;
}
const UserContext = createContext<UserContextType>({
    user: null,
    setUser: () => {},
    fetchUser: async () => {},
});
export const useUser = () => useContext(UserContext);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    // Fetch user profile từ API khi có token
    const fetchUser = async () => {
        const token = localStorage.getItem("accessToken");
        if (!token) return;
        try {
            const res = await axios.get("http://localhost:8080/api/auth/profile", {
                headers: { Authorization: `Bearer ${token}` }
            });
            setUser(res.data);
        } catch (err) {
            setUser(null);
        }
    };

    useEffect(() => { fetchUser(); }, []);

    return (
        <UserContext.Provider value={{ user, setUser, fetchUser }}>
            {children}
        </UserContext.Provider>
    );
};
