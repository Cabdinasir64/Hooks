import React, { createContext, useContext, useState } from "react";


const AppContext = createContext();

export function AppProvider({ children }) {
    const [user, setUser] = useState({ name: "Abdinasir", email: "abdinasir@example.com" });

    const [theme, setTheme] = useState("light");

    const [cart, setCart] = useState([]);

    const addToCart = (item) => setCart([...cart, item]);
    const removeFromCart = (id) => setCart(cart.filter(item => item.id !== id));

    const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

    return (
        <AppContext.Provider value={{
            user,
            setUser,
            theme,
            toggleTheme,
            cart,
            addToCart,
            removeFromCart
        }}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}
