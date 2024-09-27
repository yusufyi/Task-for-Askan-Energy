import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const authToken = localStorage.getItem("authToken");
  const [login, setLogin] = React.useState(false);
  const navigate = useNavigate();

  // Use useEffect to check authToken and update the login state
  useEffect(() => {
    if (!authToken) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, [authToken]); // This will run whenever authToken changes

  return (
    <header className="bg-blue-600 p-4 ">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold">
          Task for HEXAWARE
        </Link>
        <nav className="flex space-x-4">
          <Link to="/" className="text-white hover:underline">
            Home
          </Link>
        </nav>
        {login ? (
          <Link to="/login" className="text-white hover:underline">
            Login
          </Link>
        ) : (
          <button
            onClick={() => {
              localStorage.removeItem("authToken");
              navigate("/login");
            }}
            className="text-white hover:underline"
          >
            Logout
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
