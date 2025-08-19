import React from "react";
import { AppProvider } from "./usecontext13";
import Navbar from "./usecontext14";
import ProductList from "./usecontext15";
import Cart from "./usecontext16";

function App() {
    return (
        <AppProvider>
            <div className="min-h-screen flex flex-col items-center gap-6  bg-gradient-to-br from-blue-100 to-purple-200">
                <Navbar />
                <ProductList />
                <Cart />
            </div>
        </AppProvider>
    );
}

export default App;
