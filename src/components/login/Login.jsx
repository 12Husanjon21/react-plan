import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.scss";
import { UserContext } from "../../context/UserContext";
import todo from "../../../public/TodoImg.png";

function saveUser(user) {
  localStorage.setItem("user", JSON.stringify(user));
}

export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  async function login() {
    setError(null);
    setLoading(true);

    try {
      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userName, password }),
      });

      if (!response.ok) {
        throw new Error("Failed to login");
      }

      const user = await response.json();
      setUser(user);
      saveUser(user);

      navigate("/");
    } catch (error) {
      console.error(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    login();
  }

  return (

    <div className={styles.container}>
      <img src={todo} className={styles.room} alt="room" />      

<div className={styles.room}>

    <div className={styles.login}>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles["form-control"]}>
          <input
            placeholder="username"
            type="text"
            value={userName}
            id="userName"
            required
            onChange={(e) => setUserName(e.target.value)}
            />
        </div>
        <div className={styles["form-control"]}>
          <input
            placeholder="password"
            type="password"
            value={password}
            id="password"
            required
            onChange={(e) => setPassword(e.target.value)}
            />
        </div>
        {error && <p className={styles.error}>Error: {error.message}</p>}
        <div>
          <button className={styles.submitBtn} type="submit" disabled={loading}>
            {loading ? "Loading..." : "Sign in"}
          </button>
        </div>
      </form>
    </div>
</div>
    </div>
  );
}
