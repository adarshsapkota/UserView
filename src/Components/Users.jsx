import { useState, useEffect } from "react";
import axios from "axios";
import "./Users.css";
import { Link } from "react-router-dom";

function Users() {
  const [userdata, setUserData] = useState([]);
  const [loading, SetLoading] = useState(true);
  const [error, SetError] = useState(null);

  useEffect(() => {
    const fetchuserdata = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        console.log("Fetch sucessfull");
        setUserData(response.data);
      } catch (err) {
        SetError(err.message);
      } finally {
        SetLoading(false);
      }
    };
    fetchuserdata();
  }, []);

  if (loading) return <div className="loading"> Loading...</div>;
  if (error) return <div className="Error"> Error: {error}</div>;

  return (
    <div className="data-container">
      <h1>Users</h1>
      {userdata.map((user) => (
        <div key={user.id}>
          {" "}
          {user.name}
          <Link to={`/UserList/${user.id}`} className="link">
            →
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Users;
