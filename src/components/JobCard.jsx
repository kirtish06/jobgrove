import { Link } from "react-router-dom";
import { useBookmarks } from "../context/BookmarkContext";

export default function JobCard({ job }) {
  const { isSaved, toggleSave } = useBookmarks();
  const saved = isSaved(job.id);

  return (
    <div className="bg-white p-6 rounded-xl border border-outline-light hover-lift soft-shadow group">
      <div className="flex justify-between items-start mb-4">
        <div className="w-12 h-12 bg-surface-low flex items-center justify-center rounded-lg font-bold text-primary group-hover:bg-primary-light transition-colors">
          {job.companyInitial}
        </div>
        <button
          onClick={() => toggleSave(job.id)}
          className={`transition-colors ${saved ? "text-primary" : "text-outline hover:text-primary"}`}
        >
          <span className="material-symbols-outlined" style={{ fontVariationSettings: saved ? "'FILL' 1" : "'FILL' 0" }}>
            bookmark
          </span>
        </button>
      </div>

      <Link to={`/jobs/${job._id || job.id}`}>
        <h3 className="text-lg font-bold text-on-surface mb-1 hover:text-primary transition-colors">
          {job.title}
        </h3>
      </Link>
      <p className="text-on-surface-muted text-sm mb-4">
        {job.company} • {job.location}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        <span className="bg-surface-low text-primary px-3 py-1 rounded-md text-xs font-semibold">
          {job.type}
        </span>
        {job.remote && (
          <span className="bg-surface-low text-primary px-3 py-1 rounded-md text-xs font-semibold">
            Remote
          </span>
        )}
      </div>

      <div className="flex justify-between items-center pt-4 border-t border-outline-light">
        <span className="font-semibold text-on-surface text-sm">{job.salary}</span>
        <span className="text-xs text-outline">Posted {job.posted}</span>
      </div>
    </div>
  );
}