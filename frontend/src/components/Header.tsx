import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const authToken = localStorage.getItem("authToken");
  const [login, setLogin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLogin(!authToken);
  }, [authToken]);

  return (
    <header className="shadow-md bg-transparent text-center">
      <div className="bg-transparent py-2">
        <h1 className="text-3xl font-bold text-white">Askan Energy</h1>
      </div>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between py-4 px-6">
        <div className="flex space-x-4 justify-center">
          <Link to="/" className="text-gray-100 hover:text-green-500">
            Home
          </Link>
          <Link to="/plans" className="text-gray-100 hover:text-green-500">
            Our Plans
          </Link>
          <Link to="/about" className="text-gray-100 hover:text-green-500">
            About Us
          </Link>
        </div>
        <div className="mt-4 md:mt-0 flex space-x-4 justify-center">
          {login ? (
            <Link to="/login" className="text-green-500 font-semibold hover:underline">
              Login
            </Link>
          ) : (
            <button
              onClick={() => {
                localStorage.removeItem("authToken");
                navigate("/login");
              }}
              className="text-green-500 font-semibold hover:underline"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
