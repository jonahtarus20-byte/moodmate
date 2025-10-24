import { Link } from "react-router-dom";

export default function Navbar() {
  const user = JSON.parse(localStorage.getItem("user"));

  const handleSignOut = () => {
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  return (
    <nav className="bg-indigo-600 text-white px-6 py-3 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Center section for navigation links */}
        <div className="flex-1 flex justify-center space-x-10">
          <Link to="/" className="text-lg font-semibold hover:text-indigo-200">
            Home
          </Link>

          <Link
            to="/journal"
            className="text-lg font-semibold hover:text-indigo-200"
          >
            Journal
          </Link>

          <Link
            to="/profile"
            className="text-lg font-semibold hover:text-indigo-200"
          >
            Profile
          </Link>
        </div>

        {/* Right side: Sign In/Out button */}
        <div>
          {user ? (
            <button
              onClick={handleSignOut}
              className="bg-white text-indigo-600 px-4 py-1 rounded-lg hover:bg-indigo-100 font-medium"
            >
              Sign Out
            </button>
          ) : (
            <Link
              to="/login"
              className="bg-white text-indigo-600 px-4 py-1 rounded-lg hover:bg-indigo-100 font-medium"
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
