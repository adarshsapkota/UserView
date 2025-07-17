import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./UserList.css";

function UserList() {
  const { id } = useParams();
  const [singleuserdata, setSingleUserData] = useState([]);
  const [loading, SetLoading] = useState(true);
  const [error, SetError] = useState(null);

  useEffect(() => {
    const fetchuserdata = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        console.log("Fetch sucessfull");
        setSingleUserData(response.data);
      } catch (err) {
        SetError(err.message);
      } finally {
        SetLoading(false);
      }
    };
    fetchuserdata();
  }, [id]);

  if (loading) return <div className="loading"> Loading...</div>;
  if (error) return <div className="Error"> Error: {error}</div>;

  return (
    <div className="user-list">
      <h1>User Details</h1>
      <div className="list-item">
        <span className="list-label">ID:</span>
        <span className="list-value">{singleuserdata.id}</span>
      </div>
      <div className="list-item">
        <span className="list-label">Name:</span>
        <span className="list-value">{singleuserdata.name}</span>
      </div>
      <div className="list-item">
        <span className="list-label">Username:</span>
        <span className="list-value">{singleuserdata.username}</span>
      </div>
      <div className="list-item">
        <span className="list-label">Email:</span>
        <span className="list-value">{singleuserdata.email}</span>
      </div>
      <div className="list-item">
        <span className="list-label">Phone:</span>
        <span className="list-value">{singleuserdata.phone}</span>
      </div>
      <div className="list-item">
        <span className="list-label">Website:</span>
        <span className="list-value">{singleuserdata.website}</span>
      </div>
      <div className="list-item">
        <span className="list-label">Company:</span>
        <span className="list-value">{singleuserdata.company?.name}</span>
      </div>
      <div className="list-item">
        <span className="list-label">Address:</span>
        <span className="list-value">
          {singleuserdata.address?.street}, {singleuserdata.address?.city}
        </span>
      </div>
      <Link to="/Users" className="link">
        Back
      </Link>
    </div>
  );
}

export default UserList;
