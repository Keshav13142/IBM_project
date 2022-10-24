import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "../src/screens/Signup";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import { AppProvider } from "./context/AppContext";
import Dashboard from "./screens/Dashboard";
import Login from "./screens/Login";
import Profile from "./screens/Profile";

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Navbar />
        <Alert />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
