import { createContext, useContext, useState, useEffect } from "react";

const BookmarkContext = createContext();

export function BookmarkProvider({ children }) {
  const [savedJobs, setSavedJobs] = useState(() => {
    const stored = localStorage.getItem("jobgrove_saved");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("jobgrove_saved", JSON.stringify(savedJobs));
  }, [savedJobs]);

  const toggleSave = (jobId) => {
    setSavedJobs((prev) =>
      prev.includes(jobId) ? prev.filter((id) => id !== jobId) : [...prev, jobId]
    );
  };

  const isSaved = (jobId) => savedJobs.includes(jobId);

  return (
    <BookmarkContext.Provider value={{ savedJobs, toggleSave, isSaved }}>
      {children}
    </BookmarkContext.Provider>
  );
}

export function useBookmarks() {
  return useContext(BookmarkContext);
}