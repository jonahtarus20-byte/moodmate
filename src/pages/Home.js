import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import moodmate from "../images/moodmate.jpg";


export default function Home() {
  const [mood, setMood] = useState(null);
  const [quote, setQuote] = useState("");
  const [loading, setLoading] = useState(false);
  const [journal, setJournal] = useState(() => {
    const saved = localStorage.getItem("journal");
    return saved ? JSON.parse(saved) : [];
  });

  const moods = [
    { label: "Happy", color: "bg-yellow-400" },
    { label: "Sad", color: "bg-blue-400" },
    { label: "Angry", color: "bg-red-400" },
    { label: "Relaxed", color: "bg-green-400" },
  ];

  const fetchQuote = () => {
    setLoading(true);
    setQuote("");
    fetch("https://dummyjson.com/quotes/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.quote);
        setLoading(false);
      })
      .catch(() => {
        setQuote("Could not load a quote right now. Try again later.");
        setLoading(false);
      });
  };

  useEffect(() => {
    if (mood) fetchQuote();
  }, [mood]);

  const saveMood = () => {
    if (mood && quote) {
      const newEntry = {
        id: Date.now(),
        mood,
        quote,
        date: new Date().toLocaleString(),
      };
      const updatedJournal = [newEntry, ...journal];
      setJournal(updatedJournal);
      localStorage.setItem("journal", JSON.stringify(updatedJournal));
      setMood(null);
      setQuote("");
    }
  };

  return (
    <div className="text-center min-h-screen bg-gray-50">
      <Navbar />

     <img
  src={moodmate}
  alt="MoodMate Logo"
  className="mx-auto w-24 mt-6 mb-4 rounded-full shadow-md"
/>

      <h1 className="text-3xl font-bold mb-6">How are you feeling today?</h1>

      <div className="flex justify-center space-x-4">
        {moods.map((m) => (
          <button
            key={m.label}
            className={`px-6 py-3 rounded-lg text-white ${m.color} ${
              mood === m.label ? "ring-4 ring-offset-2 ring-indigo-500" : ""
            }`}
            onClick={() => setMood(m.label)}
          >
            {m.label}
          </button>
        ))}
      </div>

      {loading && (
        <p className="mt-4 text-gray-400 italic">Fetching some motivation...</p>
      )}

      {!loading && quote && (
        <>
          <p className="mt-4 text-gray-700 italic px-6 max-w-md mx-auto">
            “{quote}”
          </p>

          <div className="flex justify-center space-x-3 mt-4">
            <button
              onClick={fetchQuote}
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Load Another Quote
            </button>

            <button
              onClick={saveMood}
              className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
            >
              Save Mood and Quote
            </button>
          </div>
        </>
      )}
    </div>
  );
}
