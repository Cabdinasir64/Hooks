import React from "react";
import { AuthProvider } from './usecontext9'
import Navbar from './usecontext10'
import Dashboard from './usecontext11'

function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col items-center justify-center gap-6 p-6">
        <Navbar />
        <Dashboard />
      </div>
    </AuthProvider>
  );
}

export default App;
