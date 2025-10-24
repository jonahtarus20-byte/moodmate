import { useState, useEffect } from "react";
import Navbar from "../components/Navbar.js";

export default function Journal() {
  const [journal, setJournal] = useState([]);

  // ✅ Load saved journal entries from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("journal")) || [];
    setJournal(saved);
  }, []);

  // ✅ Delete an entry
  const deleteEntry = (id) => {
    const updated = journal.filter((entry) => entry.id !== id);
    setJournal(updated);
    localStorage.setItem("journal", JSON.stringify(updated)); // keep storage updated
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-md mx-auto mt-10 px-4">
        <h1 className="text-3xl font-bold text-center mb-6">Your Journal</h1>

        {journal.length === 0 ? (
          <p className="text-center text-gray-500">
            You haven’t saved any moods yet.
          </p>
        ) : (
          <ul className="space-y-4">
            {journal.map((entry) => (
              <li
                key={entry.id}
                className="bg-white shadow p-4 rounded-lg flex justify-between items-start"
              >
                <div>
                  <p className="font-semibold text-lg">{entry.mood}</p>
                  <p className="text-sm text-gray-600 italic">“{entry.quote}”</p>
                  <p className="text-xs text-gray-400 mt-2">{entry.date}</p>
                </div>

                <button
                  onClick={() => deleteEntry(entry.id)}
                  className="text-red-500 hover:text-red-700 font-semibold"
                  title="Delete entry"
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
