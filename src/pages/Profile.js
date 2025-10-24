import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const handleEditProfile = () => {
    navigate("/edit-profile");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex flex-col items-center mt-10">
        {user ? (
          <>
            <h1 className="text-3xl font-bold mt-4">{user.name}</h1>
            <p className="text-gray-600 text-lg">{user.email}</p>

            <button
              onClick={handleEditProfile}
              className="mt-6 bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700"
            >
              Edit Profile
            </button>
          </>
        ) : (
          <p className="text-gray-600 text-lg mt-10">
            Please sign in to view your profile.
          </p>
        )}
      </div>
    </div>
  );
}
