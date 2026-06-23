import { Link } from "react-router-dom";
import jobsData from "../data/jobs.json";
import JobCard from "../components/JobCard";
import { useBookmarks } from "../context/BookmarkContext";

export default function Saved() {
  const { savedJobs } = useBookmarks();
  const savedJobsList = jobsData.filter((job) => savedJobs.includes(job.id));

  return (
    <main className="max-w-[1200px] mx-auto px-6 py-16">
      <div className="flex items-center gap-3 mb-10">
        <span className="material-symbols-outlined text-primary text-3xl">bookmark</span>
        <h1 className="text-3xl font-bold text-on-surface">Your saved jobs</h1>
      </div>

      {savedJobsList.length === 0 ? (
        <div className="bg-white rounded-xl border border-outline-light p-16 text-center max-w-md mx-auto">
          <div className="w-16 h-16 bg-surface-low rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="material-symbols-outlined text-3xl text-primary">bookmark_border</span>
          </div>
          <h2 className="text-xl font-bold text-on-surface mb-2">Nothing saved yet</h2>
          <p className="text-on-surface-muted mb-6 text-sm">
            Browse jobs and tap the bookmark icon to save them here.
          </p>
          <Link to="/jobs"
            className="inline-block bg-primary text-white px-8 py-3 rounded-full font-semibold hover:brightness-110 transition-all">
            Browse Jobs
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {savedJobsList.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      )}
    </main>
  );
}