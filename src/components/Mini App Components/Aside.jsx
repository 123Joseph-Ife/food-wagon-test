import { Link } from "react-router-dom"

const Aside = ({ click, setClick }) => {
  return (
    <aside className={click === "clicked" ? "cover-screen" : ""}>
      <h1>Food Wagon</h1>
      <nav>
        <ul>
          <li><Link to="/" onClick={() => setClick("unclicked")}>Home</Link></li>
          <li><Link to="/dashboard" onClick={() => setClick("unclicked")}>Dashboard</Link></li>
          <li><Link to="/settings" onClick={() => setClick("unclicked")}>Settings</Link></li>
        </ul>
      </nav>
    </aside>
  )
}

export default Aside