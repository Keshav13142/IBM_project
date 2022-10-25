import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserSkills } from "../proxies/backend_api";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const navigate = useNavigate();

  const [skills, setSkills] = useState([]);

  const [user, setUser] = useState(null);

  const [showAlert, setShowAlert] = useState(null);

  useEffect(() => {
    let temp_user = JSON.parse(localStorage.getItem("user"));
    if (!temp_user) {
      navigate("/");
    } else {
      setUser(temp_user);
      (async () => {
        setSkills(await getUserSkills(temp_user.token));
      })();
    }
  }, []);

  return (
    <AppContext.Provider
      value={{ user, setUser, showAlert, setShowAlert, skills, setSkills }}
    >
      {children}
    </AppContext.Provider>
  );
};
