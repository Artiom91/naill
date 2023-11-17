import React, { useState, useEffect, Suspense } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import About from "./pages/About.jsx";
import MyCalendar from "@/components/MyCalendar.jsx";
import CardList from "@/pages/CardList.jsx";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate loading delay (you can replace this with your actual data fetching logic)
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <div className="relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="animate-spin rounded-full border-t-4 border-blue-500 h-12 w-12"></div>
        </div>
      )}
      <Header />
      <Suspense
        fallback={
          <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
            <div className="animate-spin rounded-full border-t-4 border-blue-500 h-12 w-12"></div>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/calendar" element={<MyCalendar />} />
          <Route path="/projects" element={<CardList />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
