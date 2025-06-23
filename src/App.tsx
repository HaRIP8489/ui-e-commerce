import React from 'react';
import AppRouter from "./route/Router";
import { UserProvider } from "./context/UserContext";

function App() {
    return (
        <UserProvider>
            <AppRouter />
        </UserProvider>
    );
}

export default App;
