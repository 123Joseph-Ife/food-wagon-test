import { signOut } from "firebase/auth";
import Top from "./Top";
import { auth } from "../../config/firebase.";
import { useNavigate } from "react-router-dom";

const Settings = ({ background, setBackground, click, setClick }) => {
  const nav = useNavigate();
  const logOut = async () => {
    await signOut(auth);
    localStorage.clear();
    nav("/");
    window.location.reload();
  };
  return (
    <main>
      <Top click={click} setClick={setClick} />
      <div className="account-box">
        Email: ife4373@gmail.com
        <button onClick={logOut}>log out</button>
        <div className="toggle">
          <input type="checkbox" id="check" />
          <label
            htmlFor="check"
            onClick={() =>
              background === "light"
                ? setBackground("dark")
                : setBackground("light")
            }
          ></label>
        </div>
      </div>
    </main>
  );
};

export default Settings;
