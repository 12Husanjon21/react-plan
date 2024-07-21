import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";
import { MdOutlineLogout } from "react-icons/md";

export default function LogoutButton({ children }) {
  const navigate = useNavigate();
  const {setUser} = useContext(UserContext);

  function removeToken() {
  localStorage.removeItem("user");
  }

  function handleLogout() {
    removeToken();
    setUser(null);
  }

  function logOut() {
    handleLogout();
    navigate("/login", {replace: true});
  }

  return (
    <button 
      className="flexBtn"
      onClick={logOut}
      style={{ color: "#0f0f0f", borderColor: "currentcolor" }}
    >
      <MdOutlineLogout />
      {children}
    </button>
  );
}



