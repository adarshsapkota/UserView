import { Link } from "react-router-dom";
import "./Welcome.css";
function Welcome() {
  return (
    <div className="ulv">
      <h1>Welcome to User List Viewer</h1>
      <Link to="/Users" className="link">
        Go to Users
      </Link>
    </div>
  );
}

export default Welcome;
